const imageFileRegex = /.png$|.jpg$/;
const filterImageFiles = files =>
  files.filter(file => imageFileRegex.test(file));
module.exports = filterImageFiles;
