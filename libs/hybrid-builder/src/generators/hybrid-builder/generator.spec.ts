import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing'
import { Tree, readProjectConfiguration } from '@nrwl/devkit'

import generator from './generator.js'
import { HybridBuilderGeneratorSchema } from './schema.js'

describe('hybrid-builder generator', () => {
  let appTree: Tree
  const options: HybridBuilderGeneratorSchema = { name: 'test' }

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await generator(appTree, options)
    const config = readProjectConfiguration(appTree, 'test')
    expect(config).toBeDefined()
  })
})
