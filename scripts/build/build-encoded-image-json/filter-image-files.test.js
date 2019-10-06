const filterImageFiles = require("./filter-image-files");

describe("filterImageFiles", () => {
  it("identifies the paths to png and jpg images", () => {
    const mockImages = ["./image.png", "./image.jpg", "./image.js", "./image"];
    const actual = filterImageFiles(mockImages);
    expect(actual).toEqual(["./image.png", "./image.jpg"]);
  });
});
