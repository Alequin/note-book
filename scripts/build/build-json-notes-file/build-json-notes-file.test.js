const fs = require('fs-extra')
const readJsonFile = require('json-files/read-file')
const {
  ROOTS_JSON_FILE,
  RAW_NOTES_DIRECTORY
} = require('../../../config/environment')

const buildJsonNotesFile = require('./build-json-notes-file')

describe('buildJsonNotesFile', () => {
  afterEach(() => {
    fs.existsSync(ROOTS_JSON_FILE) && fs.unlinkSync(ROOTS_JSON_FILE)
  })

  it('creates a roots.json file', async () => {
    await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
    expect(fs.existsSync(ROOTS_JSON_FILE)).toBe(true)
  })

  it('creates an json file with an empty list if there are no markdown files', async () => {
    await buildJsonNotesFile(`${RAW_NOTES_DIRECTORY}/test-lvl-1-1`)
    const actual = readJsonFile(ROOTS_JSON_FILE)
    expect(actual).toEqual([])
  })

  it('adds the paths of all the markdown files to the json file', async () => {
    await buildJsonNotesFile(RAW_NOTES_DIRECTORY)
    const actual = readJsonFile(ROOTS_JSON_FILE)
    expect(actual[0].path).toBe('test-lvl-1/lvl-1-simple-markdown.md')
    expect(actual[1].path).toBe('test-lvl-1/test-lvl-2/simple-markdown.md')
    expect(actual[2].path).toBe('test-lvl-1/test-lvl-2/test-file.md')
  })
})
