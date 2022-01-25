import yauzl from 'yauzl'
import { promisify } from 'util'

const yauzlFromBuffer = promisify<
  Buffer,
  yauzl.Options,
  yauzl.ZipFile | undefined
>(yauzl.fromBuffer)
export default yauzlFromBuffer
