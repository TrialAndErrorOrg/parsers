import { lstatSync, readdirSync } from 'fs'
import { join, resolve } from 'path'

const __dirname = new URL('.', import.meta.url).pathname

const root = resolve(__dirname, '..')
const apps = join(root, 'apps')
const libs = join(root, 'libs')

// function that recursively loops over all subdirectories of a given directory (by default the cwd) which contain all or any (configurable) files which fully or partially (configurable) match the array of strings and then calls the callback function on each directory
// the callback should return void or a promise that resolves to void
// the callback will be called with the path of the directory as the first argument and the directory name as the second argument
// the callback will be called with the path of the directory as the first argument and the directory name as the second argument
// if the callback returns false, the loop will not continue into that directory
// if the callback returns a promise that resolves to false, the loop will not continue into that directory
// if the callback returns a promise that rejects, the loop will not continue into that directory
const loopOverDirs = async (
  callback: (path: string, dir: string) => void | Promise<void> | boolean | Promise<boolean>,
  {
    rootDir = root,
    dirs = [apps, libs],
    files = ['package.json'],
    ignore = ['node_modules', '.git'],
    matchAllFiles = true,
    matchAllStrings = true,
    matchPartially = false,
  } = {},
) => {
  const dirsToLoopOver = dirs.map((dir) => join(rootDir, dir))

  const loop = async (dir: string) => {
    const dirName = dir.split('/').pop() as string
    const filesInDir = readdirSync(dir)

    const filesToMatch = files.filter((file) => {
      return filesInDir.some((fileInDir) =>
        matchPartially ? fileInDir.includes(file) : fileInDir === file,
      )
    })

    // go one level deeper if the directory contains no files that match the files array
    if (filesToMatch.length === 0) {
      const subDirs = readdirSync(dir).filter(
        (subDir) =>
          subDir && lstatSync(join(dir, subDir))?.isDirectory() && !ignore.includes(subDir),
      )

      await Promise.all(subDirs.map((subDir) => loop(join(dir, subDir))))
    }

    // if the directory contains files that match the files array, call the callback function
    if (matchAllFiles ? filesToMatch.length === files.length : filesToMatch.length > 0) {
      const callbackResult = await callback(dir, dirName)

      if (callbackResult) {
        const subDirs = readdirSync(dir).filter(
          (subDir) => subDir && lstatSync(join(dir, subDir))?.isDirectory(),
        )

        await Promise.all(subDirs.map((subDir) => loop(join(dir, subDir))))
      }
    }
  }

  await Promise.all(dirsToLoopOver.map((dir) => loop(dir)))
}

export { loopOverDirs }
