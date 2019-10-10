const fs = require("fs-extra");
const {
  IMAGES_JSON_FILE,
  ASSETS_DIRECTORY
} = require("../../../config/environment");
const buildEncodedImageJson = require("./build-encoded-image-json");

describe("buildEncodedImageJson", () => {
  afterEach(() => {
    fs.emptyDirSync(ASSETS_DIRECTORY);
    fs.removeSync(IMAGES_JSON_FILE);
  });

  it("creates a JSON image file", async () => {
    !fs.existsSync(ASSETS_DIRECTORY) && fs.mkdirSync(ASSETS_DIRECTORY);
    await buildEncodedImageJson();
    expect(fs.existsSync(IMAGES_JSON_FILE)).toBe(true);
  });

  it("includes all images in json data", async () => {
    fs.outputFileSync(`${ASSETS_DIRECTORY}/test1.png`);
    fs.outputFileSync(`${ASSETS_DIRECTORY}/test2.png`);
    fs.outputFileSync(`${ASSETS_DIRECTORY}/test3.png`);
    await buildEncodedImageJson();

    const imageJson = fs.readJSONSync(IMAGES_JSON_FILE);
    expect(imageJson).toHaveProperty("test1");
    expect(imageJson).toHaveProperty("test2");
    expect(imageJson).toHaveProperty("test3");
  });
});
