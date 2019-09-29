const { last, flow } = require('lodash')
const splitByFileSeparator = filePath => filePath.split(/\/|\\/)
module.exports = flow(
  splitByFileSeparator,
  last
)
