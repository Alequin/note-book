const removeExtensionFromFilePath = require("./remove-extension-from-file-path");

describe("removeExtensionFromFilePath", () => {
  it("Trims the last extension of the given file name", () => {
    expect(removeExtensionFromFilePath("file.md")).toBe("file");
  });
  it("Trims the extensions of the given file path", () => {
    expect(removeExtensionFromFilePath("path/to/the/file.test.js")).toBe(
      "path/to/the/file"
    );
  });
});
