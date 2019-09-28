const readMarkdownFiles = require('./read-markdown-file')

describe('readMarkdownFiles', () => {
  it('Can read in mark down files', () => {
    const expected = '# this is a markdown file'
    const actual = readMarkdownFiles('test-lvl-1/test-lvl-2/simple-markdown.md')
    expect(actual).toBe(expected)
  })
})
