const fs = require('fs-extra')
const {
  ROOTS_JSON_FILE,
  RAW_NOTES_DIRECTORY
} = require('../../../config/environment')

const buildJsonNotesFile = require('./build-json-notes-file')

describe('buildJsonNotesFile', () => {
  afterEach(() => {
    fs.emptyDirSync(RAW_NOTES_DIRECTORY)
    fs.removeSync(ROOTS_JSON_FILE)
  })

  it('creates a roots.json file', async () => {
    await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
    expect(fs.existsSync(ROOTS_JSON_FILE)).toBe(true)
  })

  describe('When the raw-notes-directory is empty', () => {
    it('creates an json file with an empty list', async () => {
      await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
      const actual = fs.readJSONSync(ROOTS_JSON_FILE)
      expect(actual).toEqual([])
    })
  })

  describe('When the raw-notes-directory contains files', () => {
    beforeEach(() => {
      // Create files to test against
      ;[
        {
          name: `${RAW_NOTES_DIRECTORY}/file-0.md`,
          content: '# markdown 0'
        },
        {
          name: `${RAW_NOTES_DIRECTORY}/lvl-1/file-1.md`,
          content: '**markdown 1**'
        },
        {
          name: `${RAW_NOTES_DIRECTORY}/lvl-1/lvl-2/file-2.md`,
          content: '~~markdown 2~~'
        },
        {
          name: `${RAW_NOTES_DIRECTORY}/.private-file`
        }
      ].map(({ name, content }) =>
        !content ? fs.outputFileSync(name) : fs.outputFileSync(name, content)
      )
    })

    it('adds the paths of all the markdown files to the json file', async () => {
      await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
      const actual = fs.readJSONSync(ROOTS_JSON_FILE)
      expect(actual[0].path).toBe('file-0.md')
      expect(actual[1].path).toBe('lvl-1/file-1.md')
      expect(actual[2].path).toBe('lvl-1/lvl-2/file-2.md')
    })

    it('includes the files name', async () => {
      await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
      const actual = fs.readJSONSync(ROOTS_JSON_FILE)
      expect(actual[0].name).toBe('File 0')
      expect(actual[1].name).toBe('File 1')
      expect(actual[2].name).toBe('File 2')
    })

    it('ignores private files', async () => {
      await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
      const actual = fs.readJSONSync(ROOTS_JSON_FILE)
      const privateFiles = actual.filter(({ name }) => name === 'Private File')
      expect(privateFiles).toHaveLength(0)
    })

    it('includes the contents of each markdown file', async () => {
      await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
      const actual = fs.readJSONSync(ROOTS_JSON_FILE)
      expect(actual[0].content).toBe('# markdown 0')
      expect(actual[1].content).toBe('**markdown 1**')
      expect(actual[2].content).toBe('~~markdown 2~~')
    })
  })
})
