const fs = require("fs-extra");
const {
  RAW_FLASH_CARDS_DIRECTORY,
  FLASH_CARDS_JSON_FILE
} = require("../../../config/environment");

const buildFlashCardsJsonFile = require("./build-flash-cards-json-file");

describe("buildFlashCardsJsonFile", () => {
  afterEach(() => {
    fs.emptyDirSync(RAW_FLASH_CARDS_DIRECTORY);
    fs.removeSync(FLASH_CARDS_JSON_FILE);
  });

  it("creates a json file with all flash cards", () => {
    const mockFlashCardContent = `
# Question

This is a question

# Answer

This is an answer
        `;

    fs.outputFileSync(
      `${RAW_FLASH_CARDS_DIRECTORY}/card1.md`,
      mockFlashCardContent
    );

    buildFlashCardsJsonFile();

    expect(fs.existsSync(FLASH_CARDS_JSON_FILE)).toBe(true);
    expect(fs.readJSONSync(FLASH_CARDS_JSON_FILE)).toEqual([
      {
        content: `<h1 id=\"question\">Question</h1>
<p>This is a question</p>
<h1 id=\"answer\">Answer</h1>
<p>This is an answer</p>`
      }
    ]);
  });

  it("does not crash when non markdown folders are in the raw flash cards directory", () => {
    fs.outputFileSync(`${RAW_FLASH_CARDS_DIRECTORY}/card1.md`, `# Question`);
    fs.mkdirSync(`${RAW_FLASH_CARDS_DIRECTORY}/some-dir`);
    buildFlashCardsJsonFile();
    expect(fs.existsSync(FLASH_CARDS_JSON_FILE)).toBe(true);
  });
});
