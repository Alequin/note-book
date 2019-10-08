const { IMAGES_JSON_FILE, isReactApp } = require("../config/environment");

module.exports = imageName => {
  const foundImage = readImage(imageName);
  if (!foundImage) throw Error(`No image by the name ${imageName} exists`);
  return foundImage;
};

const readImage = name =>
  isReactApp ? require("./images.json")[name] : require(IMAGES_JSON_FILE)[name];
