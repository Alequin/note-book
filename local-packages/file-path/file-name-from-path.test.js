const fileNameFromPath = require('./file-name-from-path')

describe('fileNameFromPath', () => {
  it('identifes the file name from the given path', () => {
    const filePath = 'path/to/the/file/file-name.md'
    const expected = 'file-name.md'
    const actual = fileNameFromPath(filePath)
    expect(actual).toEqual(expected)
  })
})
