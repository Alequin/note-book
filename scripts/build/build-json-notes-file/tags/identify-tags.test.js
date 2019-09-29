const identifyTags = require("./identify-tags");

describe("identifyTags", () => {
  it("returns null if the content is falsy", () => {
    expect(identifyTags(null)).toBe(null);
  });

  it("returns null if there are no tags", () => {
    expect(identifyTags("there are no tags here")).toBe(null);
  });

  it("returns the identified tags as a single string if there are any", () => {
    expect(
      identifyTags("|\\-/|Tags|\\-/|-tag1,tag-2,tag 3,tag_4-|\\-/|Tags|\\-/|")
    ).toEqual("tag1,tag-2,tag 3,tag_4");
  });
});
