const fs = require("fs-extra");
const {
  ROUTES_JSON_FILE,
  RAW_NOTES_DIRECTORY
} = require("../../../config/environment");

const buildRoutesJsonFile = require("./build-routes-json-file");

describe("buildRoutesJsonFile", () => {
  afterEach(() => {
    fs.emptyDirSync(RAW_NOTES_DIRECTORY);
    fs.removeSync(ROUTES_JSON_FILE);
  });

  it("creates a routes.json file", async () => {
    await buildRoutesJsonFile();
    expect(fs.existsSync(ROUTES_JSON_FILE)).toBe(true);
  });

  describe("When the raw-notes-directory is empty", () => {
    it("creates an json file with an empty list", async () => {
      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      expect(actual).toEqual([]);
    });
  });

  describe("When the raw-notes-directory contains files", () => {
    beforeEach(() => {
      // Create files to test against
      [
        {
          name: `${RAW_NOTES_DIRECTORY}/file-0.md`,
          content: "# markdown 0"
        },
        {
          name: `${RAW_NOTES_DIRECTORY}/lvl-1/file-1.md`,
          content: "**markdown 1**"
        },
        {
          name: `${RAW_NOTES_DIRECTORY}/lvl-1/lvl-2/file-2.md`,
          content: "~~markdown 2~~"
        },
        {
          name: `${RAW_NOTES_DIRECTORY}/.private-file`
        }
      ].map(({ name, content }) =>
        !content ? fs.outputFileSync(name) : fs.outputFileSync(name, content)
      );
    });

    it("adds the paths of all the markdown files to the json file", async () => {
      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      expect(actual[0].path).toBe("/file-0");
      expect(actual[1].path).toBe("/lvl-1/file-1");
      expect(actual[2].path).toBe("/lvl-1/lvl-2/file-2");
    });

    it("includes the files name", async () => {
      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      expect(actual[0].name).toBe("File 0");
      expect(actual[1].name).toBe("File 1");
      expect(actual[2].name).toBe("File 2");
    });

    it("ignores private files", async () => {
      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      const privateFiles = actual.filter(({ name }) => name === "Private File");
      expect(privateFiles).toHaveLength(0);
    });

    it("includes the contents of each markdown file", async () => {
      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      expect(actual[0].content).toBe("# markdown 0");
      expect(actual[1].content).toBe("**markdown 1**");
      expect(actual[2].content).toBe("~~markdown 2~~");
    });

    it("adds the lastModified date", async () => {
      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      const currentDate = new Date().toISOString().split("T")[0];

      expect(actual[0].lastModified).toBe(currentDate);
      expect(actual[1].lastModified).toBe(currentDate);
      expect(actual[2].lastModified).toBe(currentDate);
    });

    it("does not update the lastModified date if the markdown file has not change", async () => {
      // Make an old JSON file
      fs.writeJSONSync(ROUTES_JSON_FILE, [
        {
          path: "/file-0",
          name: "File 0",
          content: "# markdown 0",
          lastModified: "2000-01-01"
        },
        {
          path: "file-1",
          name: "File 1",
          content: "**markdown 1** but this content will be changed",
          lastModified: "2000-01-01"
        }
      ]);

      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      const currentDate = new Date().toISOString().split("T")[0];

      expect(actual[0].lastModified).toBe("2000-01-01");
      expect(actual[1].lastModified).toBe(currentDate);
      expect(actual[2].lastModified).toBe(currentDate);
    });
  });

  describe("When the raw-notes-directory contains files that have tags", () => {
    beforeEach(() => {
      // Create files to test against
      [
        {
          name: `${RAW_NOTES_DIRECTORY}/lvl-1/file-1.md`,
          content: `
# Title

This is a markdown file that I am writing in

|\\-/|Tags|\\-/|-tag1,tag-2,tag 3,tag_4-|\\-/|Tags|\\-/|

This is more content
          `
        }
      ].map(({ name, content }) =>
        !content ? fs.outputFileSync(name) : fs.outputFileSync(name, content)
      );
    });

    it("Identifes the tags defined in the markdown file", async () => {
      await buildRoutesJsonFile();
      const actual = fs.readJSONSync(ROUTES_JSON_FILE);
      expect(actual[0].tags).toEqual(["tag1", "tag-2", "tag 3", "tag_4"]);
    });
  });
});
