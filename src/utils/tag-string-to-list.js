import TAG_DELIMETER from "./tag-delimeter";
const tagStringToList = tagString =>
  tagString ? tagString.split(TAG_DELIMETER) : [];

export default tagStringToList;
