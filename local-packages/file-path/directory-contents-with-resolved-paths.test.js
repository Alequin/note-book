const directoryContentsWithResolvedPaths = require("./directory-contents-with-resolved-paths");
const fs = require("fs-extra");
const { RAW_NOTES_DIRECTORY } = require("../../config/environment");

describe("directoryContentsWithResolvedPaths", () => {
  beforeEach(() => {
    fs.emptyDirSync(RAW_NOTES_DIRECTORY);
  });

  afterEach(() => {
    fs.emptyDirSync(RAW_NOTES_DIRECTORY);
  });

  it("identfies filepaths in the given directory", () => {
    const rootDirForTest = `${RAW_NOTES_DIRECTORY}/test-lvl-1`;
    const filePath1 = `${rootDirForTest}/simple-markdown.md`;
    fs.outputFileSync(filePath1, "");
    const filePath2 = `${rootDirForTest}/test-lvl-2`;
    fs.mkdirSync(filePath2);

    const expected = [filePath1, filePath2];
    const actual = directoryContentsWithResolvedPaths(rootDirForTest);
    expect(actual).toEqual(expected);
  });

  it("Ignores private files", () => {
    const privateFileName = ".private-file-to-ignore";
    const privateFileDir = `${RAW_NOTES_DIRECTORY}/test-lvl-1-1`;
    const privateFilePath = `${privateFileDir}/${privateFileName}`;

    fs.outputFileSync(privateFilePath);

    const actual = directoryContentsWithResolvedPaths(privateFileDir);
    expect(actual).toEqual([]);
  });
});
