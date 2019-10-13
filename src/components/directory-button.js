import React from "react";
import ItemButton from "./item-button";

import images from "assets/images";

const DirectoryButton = ({ name, onClick }) => (
  <ItemButton name={name} onClick={onClick} image={images("folder")} />
);

export default DirectoryButton;
