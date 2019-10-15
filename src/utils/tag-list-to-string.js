import TAG_DELIMETER from "./tag-delimeter";
const tagListToString = tagList => (tagList ? tagList.join(TAG_DELIMETER) : "");
export default tagListToString;
