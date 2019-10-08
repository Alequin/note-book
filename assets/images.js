const { IMAGES_JSON_FILE, isReactApp } = require("../config/environment");
module.exports = imageName => {
  const foundImage = loadImage(imageName);
  if (!foundImage) throw Error(`No image by the name ${imageName} exists`);
  return foundImage;
};

const loadImage = imageName =>
  isReactApp
    ? require("./images.json")[imageName]
    : require(IMAGES_JSON_FILE)[imageName];
