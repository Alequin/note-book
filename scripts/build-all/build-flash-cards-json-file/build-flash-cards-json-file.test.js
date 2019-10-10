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
    const mockFlashCardQuestionContent = `
# Question

This is a question
`;
    const mockFlashCardAnswerContent = `
# Answer

This is an answer
`;

    fs.outputFileSync(
      `${RAW_FLASH_CARDS_DIRECTORY}/card1.question.md`,
      mockFlashCardQuestionContent
    );
    fs.outputFileSync(
      `${RAW_FLASH_CARDS_DIRECTORY}/card1.answer.md`,
      mockFlashCardAnswerContent
    );

    buildFlashCardsJsonFile();

    expect(fs.existsSync(FLASH_CARDS_JSON_FILE)).toBe(true);
    expect(fs.readJSONSync(FLASH_CARDS_JSON_FILE)).toEqual([
      {
        question: `<h1 id=\"question\">Question</h1>
<p>This is a question</p>`,
        answer: `<h1 id=\"answer\">Answer</h1>
<p>This is an answer</p>`
      }
    ]);
  });

  it("does not crash when non markdown folders are in the raw flash cards directory", () => {
    fs.outputFileSync(
      `${RAW_FLASH_CARDS_DIRECTORY}/card1.question.md`,
      `# Question`
    );
    fs.outputFileSync(
      `${RAW_FLASH_CARDS_DIRECTORY}/card1.answer.md`,
      `# Answer`
    );
    fs.mkdirSync(`${RAW_FLASH_CARDS_DIRECTORY}/some-dir`);
    buildFlashCardsJsonFile();
    expect(fs.existsSync(FLASH_CARDS_JSON_FILE)).toBe(true);
  });

  it("throws an error if the question file is missing", () => {
    fs.outputFileSync(
      `${RAW_FLASH_CARDS_DIRECTORY}/card1.answer.md`,
      `# Answer`
    );
    expect(buildFlashCardsJsonFile).toThrow();
  });

  it("throws an error if the answer file is missing", () => {
    fs.outputFileSync(
      `${RAW_FLASH_CARDS_DIRECTORY}/card1.question.md`,
      `# Question`
    );
    expect(buildFlashCardsJsonFile).toThrow();
  });
});
