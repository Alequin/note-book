const fs = require('fs')

const writeFile = (path, toStoreAsJson) =>
  fs.writeFileSync(path, JSON.stringify(toStoreAsJson))

module.exports = writeFile
