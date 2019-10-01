const filterRoutesToDisplay = require("./filter-routes-to-display");

describe("filterRoutesToDisplay", () => {
  it("returns all routes when the current route is empty", () => {
    const mockCurrentRoute = [];

    const mockRoutes = [
      {
        pathSegments: ["file-0"]
      },
      {
        pathSegments: ["lvl-1", "file-1"]
      },
      {
        pathSegments: ["lvl-1", "lvl-2", "file-2"]
      }
    ];

    const actual = filterRoutesToDisplay(mockCurrentRoute, mockRoutes);
    expect(actual).toEqual(mockRoutes);
  });

  it("filters out non matching routes", () => {
    const mockCurrentRoute = ["lvl-1", "lvl-2"];

    const mockRoutes = [
      {
        pathSegments: ["lvl-1", "file-0"]
      },
      {
        pathSegments: ["lvl-1", "lvl-2", "file-1"]
      },
      {
        pathSegments: ["lvl-1", "lvl-2", "lvl-3", "file-2"]
      }
    ];

    const expected = [
      {
        pathSegments: ["lvl-1", "lvl-2", "file-1"]
      },
      {
        pathSegments: ["lvl-1", "lvl-2", "lvl-3", "file-2"]
      }
    ];

    const actual = filterRoutesToDisplay(mockCurrentRoute, mockRoutes);
    expect(actual).toEqual(expected);
  });
});
