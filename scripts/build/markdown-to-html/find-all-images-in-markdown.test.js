const findAllImagesInMarkdown = require("./find-all-images-in-markdown");

describe("findAllImagesInMarkdown", () => {
  it("Identifies all images in markdown string", async () => {
    const mockMarkdown = `
# Title

This is a markdown file that I am writing in

![picture1](../../dog.png)

Here is some more text

![picture2](../cat.png)
    `;

    const actual = findAllImagesInMarkdown(mockMarkdown);
    expect(actual).toEqual([
      "![picture1](../../dog.png)",
      "![picture2](../cat.png)"
    ]);
  });

  it("Returns an empty array if there are no images", async () => {
    const mockMarkdown = `
# Title

This is a markdown file that I am writing in

Here is some more text
    `;

    const actual = findAllImagesInMarkdown(mockMarkdown);
    expect(actual).toEqual([]);
  });
});
