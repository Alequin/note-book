const transformImagesInMarkdown = () =>
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
