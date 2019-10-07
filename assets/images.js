const { IMAGES_JSON_FILE } = require("../config/environment");
module.exports = imageName => {
  const foundImage = require(IMAGES_JSON_FILE)[imageName];
  if (!foundImage) throw Error(`No image by the name ${imageName} exists`);
  return foundImage;
};
