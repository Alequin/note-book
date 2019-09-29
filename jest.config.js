const fs = require('fs-extra')
process.env.IS_TEST = true
// Clean up any old test raw-notes files and make a clean test dir for raw-notes tests
fs.existsSync('./test-raw-notes')
  ? fs.emptyDirSync('./test-raw-notes')
  : fs.mkdirSync('./test-raw-notes')
