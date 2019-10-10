const transformToDisplayableItems = require("./transform-to-displayable-items");

describe("transformToDisplayableItems", () => {
  it("transforms routes to items to display", () => {
    const mockRoutes = [
      {
        path: "/file-0",
        pathSegments: ["file-0"],
        name: "File 0"
      },
      {
        path: "/lvl-1/file-1",
        pathSegments: ["lvl-1", "file-1"],
        name: "File 1"
      },
      {
        path: "/lvl-1/file-2",
        pathSegments: ["lvl-1", "file-2"],
        name: "File 2"
      }
    ];
    const mockDirectoryDepth = 0;

    const expected = [
      { isDirectory: false, name: "File 0", to: "/file-0" },
      { isDirectory: true, name: "lvl-1" }
    ];
    const actual = transformToDisplayableItems(mockRoutes, mockDirectoryDepth);
    expect(actual).toEqual(expected);
  });
});
