const fs = require('fs-extra')

const identifyFilesAndDirectories = async paths => {
  const pathsDetails = await Promise.all(
    paths.map(async path => ({ path, stats: await fs.lstat(path) }))
  )
  return {
    files: pathsDetails.filter(isFile).map(getPath),
    directories: pathsDetails.filter(isDirectory).map(getPath)
  }
}

const isFile = ({ stats }) => stats.isFile()
const isDirectory = ({ stats }) => stats.isDirectory()
const getPath = ({ path }) => path

module.exports = identifyFilesAndDirectories
