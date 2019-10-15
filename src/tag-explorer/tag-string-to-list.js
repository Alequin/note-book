const TAG_DELIMETER = "~";

const tagStringToList = tagString =>
  tagString ? tagString.split(TAG_DELIMETER) : [];

export default tagStringToList;
