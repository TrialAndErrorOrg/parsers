import { ExecutorContext } from '@nx/devkit'
import { ExecutorOptions } from '@nx/js/src/utils/schema'
import { createTypeScriptCompilationOptions, normalizeOptions } from './executor.js'

describe('tscExecutor', () => {
  let context: ExecutorContext
  let testOptions: ExecutorOptions

  beforeEach(async () => {
    context = {
      root: '/root',
      cwd: '/root',
      projectsConfigurations: {
        version: 2,
        projects: {},
      },
      nxJsonConfiguration: {
        npmScope: 'test',
      },
      isVerbose: false,
      projectName: 'example',
      targetName: 'build',
    }
    testOptions = {
      main: 'libs/ui/src/index.ts',
      outputPath: 'dist/libs/ui',
      tsConfig: 'libs/ui/tsconfig.json',
      assets: [],
      transformers: [],
      watch: false,
      clean: true,
    }
  })

  describe('createTypeScriptCompilationOptions', () => {
    it('should create typescript compilation options for valid config', () => {
      const result = createTypeScriptCompilationOptions(
        normalizeOptions(testOptions, '/root', '/root/libs/ui/src', '/root/libs/ui'),
        context,
      )

      expect(result).toMatchObject({
        outputPath: '/root/dist/libs/ui',
        projectName: 'example',
        projectRoot: '/root/libs/ui',
        rootDir: '/root/libs/ui',
        tsConfig: '/root/libs/ui/tsconfig.json',
        watch: false,
        deleteOutputPath: true,
      })
    })

    it('should handle custom rootDir', () => {
      const result = createTypeScriptCompilationOptions(
        normalizeOptions(
          { ...testOptions, rootDir: 'libs/ui/src' },
          '/root',
          '/root/libs/ui/src',
          '/root/libs/ui',
        ),
        context,
      )

      expect(result).toMatchObject({
        rootDir: '/root/libs/ui/src',
      })
    })
  })

  describe('packageJSON', () => {
    it('should create package.json', () => {
      const result = createTypeScriptCompilationOptions(
        normalizeOptions(testOptions, '/root', '/root/libs/ui/src', '/root/libs/ui'),
        context,
      )

      expect(result).toMatchObject({
        outputPath: '/root/dist/libs/ui',
        projectName: 'example',
        projectRoot: '/root/libs/ui',
        rootDir: '/root/libs/ui',
        tsConfig: '/root/libs/ui/tsconfig.json',
        watch: false,
        deleteOutputPath: true,
      })
    })

    it('should not include dependencies from *.spec.* or *.test.* files in the package.json', () => {
      const result = createTypeScriptCompilationOptions(
        normalizeOptions(
          { ...testOptions, main: 'libs/ui/src/index.ts' },
          '/root',
          '/root/libs/ui/src',
          '/root/libs/ui',
        ),
        context,
      )

      expect(result).toMatchObject({
        outputPath: '/root/dist/libs/ui',
        projectName: 'example',
        projectRoot: '/root/libs/ui',
        rootDir: '/root/libs/ui',
        tsConfig: '/root/libs/ui/tsconfig.json',
        watch: false,
        deleteOutputPath: true,
      })
    })
  })
})
