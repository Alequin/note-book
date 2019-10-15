import { flatMap, uniq, sortBy, identity, flow } from "lodash";
import ROUTES from "../routes.json";

const getAllTags = () => flatMap(ROUTES, ({ tags }) => tags);
const removeDuplicateTags = tags => uniq(tags);
const removeInvalidTags = tags => tags.filter(identity);
const sortAlphabetically = tags => sortBy(tags, identity);

const allTags = flow(
  getAllTags,
  removeDuplicateTags,
  removeInvalidTags,
  sortAlphabetically
);

export default allTags;
