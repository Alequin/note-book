const directoryContentsWithResolvedPaths = require('./directory-contents-with-resolved-paths')
const fs = require('fs-extra')
const { RAW_NOTES_DIRECTORY } = require('../../../config/environment')

describe('directoryContentsWithResolvedPaths', () => {
  it('Can read in mark down files', () => {
    const expected = [
      `${RAW_NOTES_DIRECTORY}/test-lvl-1/lvl-1-simple-markdown.md`,
      `${RAW_NOTES_DIRECTORY}/test-lvl-1/test-lvl-2`
    ]
    const actual = directoryContentsWithResolvedPaths(
      `${RAW_NOTES_DIRECTORY}/test-lvl-1`
    )
    expect(actual).toEqual(expected)
  })

  it('Ignores private files', () => {
    const privateFileName = '.private-file-to-ignore'
    const privateFileDir = `${RAW_NOTES_DIRECTORY}/test-lvl-1-1`
    const privateFilePath = `${privateFileDir}/${privateFileName}`

    // Make a private file, which will be ignored.
    // There must be a private file to ignore for
    // the test to be valid
    fs.writeFileSync(privateFilePath)

    const actual = directoryContentsWithResolvedPaths(privateFileDir)
    expect(actual).toEqual([])

    // Delete private file after use
    fs.removeSync(privateFilePath)
  })
})
