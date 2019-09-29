const identfyFilesAndDirectories = require('./identify-directories-and-files')
const path = require('path')
const fs = require('fs-extra')
const { RAW_NOTES_DIRECTORY } = require('../../../config/environment')

describe('identfyFilesAndDirectories', () => {
  afterEach(() => {
    fs.emptyDirSync(RAW_NOTES_DIRECTORY)
  })

  it('Can separated a list of paths into files and directories', async () => {
    const file = `${RAW_NOTES_DIRECTORY}/test-lvl-1/lvl-1-simple-markdown.md`
    fs.outputFileSync(file)
    const directory = `${RAW_NOTES_DIRECTORY}/test-lvl-1/test-lvl-2`
    fs.mkdirSync(directory)

    const actual = await identfyFilesAndDirectories([file, directory])

    expect(actual.files).toEqual([file])
    expect(actual.directories).toEqual([directory])
  })
})
