#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { hideBin } from 'yargs/helpers'
import yaml from 'js-yaml'
import chokidar from 'chokidar'
import { exec } from 'child_process'
import yargs from 'yargs'

import { docxConverter as converterFunction } from '../book-converter.js'

import {
  ConverterOptions,
  converterCLIOptionsDefaultSchemaInput,
  converterOptionsDefaultSchemaInput,
  converterOptionsSchema,
  converterOptionsSchemaInput,
} from './schema.js'
import { zodToYargsOptions } from '../util/zod-to-yargs.js'
import { writeFile } from 'fs/promises'

// Define Zod schema

async function runConverterWithOptions(
  fileOptions: Partial<ConverterOptions>,
  cliOptions: Partial<ConverterOptions>,
) {
  const finalOptions = { ...fileOptions, ...cliOptions }

  // Validate finalOptions with Zod
  const parsedOptions = converterOptionsSchema.parse(finalOptions)

  console.log('Running with options:', parsedOptions)
  const output = await converterFunction(parsedOptions)

  const outputPath = path.join(
    parsedOptions.out!,
    path.basename(parsedOptions.docx).replace('.docx', '.tex'),
  )

  await writeFile(outputPath, output.latexString)
  console.log(`✅ Conversion succesful! Output written to ${outputPath}`)

  // Run any post-conversion command
  if (parsedOptions.onSuccess) {
    exec(parsedOptions.onSuccess, (error, stdout, stderr) => {
      if (error) {
        console.error('Error in post-command:', error)
      }
      console.log(stdout)
      console.error(stderr)
    })
  }
}

// Use Zod to define CLI arguments schema
const cliArgs = yargs(hideBin(process.argv))
  .options(zodToYargsOptions(converterCLIOptionsDefaultSchemaInput))
  .parse()

const argv = converterCLIOptionsDefaultSchemaInput.parse(cliArgs)

;(async () => {
  const configPath = argv.config
    ? path.resolve(process.cwd(), argv.config)
    : path.join(process.cwd(), 'convert-config.yaml')

  let fileOptions: Partial<ConverterOptions> = {}

  // Try reading from config file
  if (fs.existsSync(configPath)) {
    const configFileContent = fs.readFileSync(configPath, 'utf8')
    const parsedYaml = yaml.load(configFileContent)
    fileOptions = converterOptionsSchema.parse(parsedYaml)
  } else {
    console.warn(`Config file at ${configPath} not found.`)
  }

  try {
    await runConverterWithOptions(fileOptions, argv)
  } catch (err) {
    console.error('Error:', err)
  }

  // CLI Menu
  process.stdin.resume()
  process.stdin.setEncoding('utf8')

  console.log('Press "r + Enter" to rerun, "q + Enter" to quit')

  process.stdin.on('data', async (choice) => {
    const choiceString = choice.toString('utf-8').trim()

    if (choiceString === 'q') {
      process.exit()
      return
    }

    if (choiceString === 'r') {
      try {
        await runConverterWithOptions(fileOptions, argv)
      } catch (err) {
        console.error('Error:', err)
      }
    }
  })

  // Watch for file changes
  const watcher = chokidar.watch([configPath])
  watcher.on('change', async (path) => {
    console.log(`${path} has changed. Re-running...`)
    if (path === configPath) {
      const configFileContent = fs.readFileSync(configPath, 'utf8')
      const parsedYaml = yaml.load(configFileContent)
      fileOptions = converterOptionsSchema.parse(parsedYaml)
    }
    try {
      await runConverterWithOptions(fileOptions, argv)
    } catch (err) {
      console.error('Error:', err)
    }
  })
})()
