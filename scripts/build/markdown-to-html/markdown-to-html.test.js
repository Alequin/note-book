const fs = require("fs-extra");
const { IMAGES_JSON_FILE } = require("../../../config/environment");

const markdownToHtml = require("./markdown-to-html");

describe("markdownToHtml", () => {
  afterEach(() => {
    fs.removeSync(IMAGES_JSON_FILE);
  });

  it("can transform markdown to html", () => {
    fs.writeJsonSync(IMAGES_JSON_FILE, {
      dog: "dog-data-uri",
      cat: "cat-data-uri"
    });

    const markdown = `
# Title

This is text

![dog-image](../../dog.png)

- list item one
- list item two
  - sub list item one
  - sub list item two

![cat-image](../../cat.png)`;

    const actual = markdownToHtml(markdown);
    expect(actual).toBe(`<h1 id="title">Title</h1>
<p>This is text</p>
<p><img src="dog-data-uri" alt="dog-image"></p>
<ul>
<li>list item one</li>
<li>list item two<ul>
<li>sub list item one</li>
<li>sub list item two</li>
</ul>
</li>
</ul>
<p><img src="cat-data-uri" alt="cat-image"></p>`);

    fs.removeSync(IMAGES_JSON_FILE);
  });

  it("should trim the resulting html", () => {
    const markdown = `
# Title

`;

    const actual = markdownToHtml(markdown);
    expect(actual).toBe(`<h1 id="title">Title</h1>`);

    fs.removeSync(IMAGES_JSON_FILE);
  });
});
