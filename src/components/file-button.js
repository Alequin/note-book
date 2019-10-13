import React from "react";
import { Link } from "react-router-dom";
import ItemButton from "./item-button";

import images from "assets/images";

const FileButton = ({ name, to }) => (
  <Link to={to}>
    <ItemButton name={name} image={images("file")} />
  </Link>
);

export default FileButton;
