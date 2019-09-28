const directoryContentsWithResolvedPaths = require('./directory-contents-with-resolved-paths')
const path = require('path')
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
})
