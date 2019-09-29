const fs = require('fs')
process.env.IS_TEST = true
// Make test dir for raw-notes tests if it does not exist
!fs.existsSync('./test-raw-notes') && fs.mkdirSync('./test-raw-notes')
