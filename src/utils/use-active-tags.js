import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import useTagsQueryString from "./use-tags-query-string";
import tagStringToList from "./tag-string-to-list";
import tagListToString from "./tag-list-to-string";
import TAGS_QUERY_KEY from "./tags-query-key";

const useActiveTags = () => {
  const history = useHistory();
  const tagsList = tagStringToList(useTagsQueryString());

  const setTags = useCallback(
    newTags => {
      history.push({
        search:
          newTags.length > 0
            ? `?${TAGS_QUERY_KEY}=${tagListToString(newTags)}`
            : ""
      });
    },
    [history]
  );

  const addTag = useCallback(
    tag => {
      const tagToAdd = tag.trim();
      tagToAdd && setTags([...tagsList, tagToAdd]);
    },
    [tagsList, setTags]
  );

  const clearAllTags = useCallback(() => setTags([]), [setTags]);

  const removeTag = useCallback(
    tagToRemove => setTags(tagsList.filter(tag => tag !== tagToRemove)),
    [tagsList, setTags]
  );

  return {
    tagsList,
    addTag,
    clearAllTags,
    removeTag
  };
};

export default useActiveTags;
