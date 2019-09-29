const fs = require('fs-extra')
const { RAW_NOTES_DIRECTORY } = require('../../../config/environment')

const readMarkdownFiles = require('./read-markdown-file')

describe('readMarkdownFiles', () => {
  afterEach(() => {
    fs.emptyDirSync(RAW_NOTES_DIRECTORY)
  })

  it('Can read in mark down files', () => {
    const filePath = 'test-lvl-1/test-lvl-2/simple-markdown.md'
    const fileContents = '# This is a markdown file'
    fs.outputFileSync(`${RAW_NOTES_DIRECTORY}/${filePath}`, fileContents)

    const actual = readMarkdownFiles(filePath)
    expect(actual).toBe(fileContents)
  })
})
