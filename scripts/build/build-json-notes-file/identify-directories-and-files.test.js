const identfyFilesAndDirectories = require('./identify-directories-and-files')
const path = require('path')
const { RAW_NOTES_DIRECTORY } = require('../../../config/environment')

describe('identfyFilesAndDirectories', () => {
  it('Can separated a list of paths into files and directories', async () => {
    const actual = await identfyFilesAndDirectories([
      path.resolve(
        `${RAW_NOTES_DIRECTORY}/test-lvl-1/lvl-1-simple-markdown.md`
      ),
      path.resolve(`${RAW_NOTES_DIRECTORY}/test-lvl-1/test-lvl-2`)
    ])

    expect(actual.files).toEqual([
      path.resolve(
        `${RAW_NOTES_DIRECTORY}/test-lvl-1/lvl-1-simple-markdown.md`
      )
    ])

    expect(actual.directories).toEqual([
      path.resolve(`${RAW_NOTES_DIRECTORY}/test-lvl-1/test-lvl-2`)
    ])
  })
})
