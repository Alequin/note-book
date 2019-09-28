const fs = require('fs')
const readFile = path => JSON.parse(fs.readFileSync(path))
module.exports = readFile
