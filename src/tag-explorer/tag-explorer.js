import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ItemGrid from "../components/item-grid";
import FileButton from "../components/file-button";
import SearchTags from "./search-tags";
import useTagsQueryString from "./use-tags-query-string";
import tagStringToList from "./tag-string-to-list";
import tagListToString from "./tag-list-to-string";

import ROOTS from "../routes.json";

const TAGS_QUERY_KEY = "tags";

const useTagsList = () => {
  const tagsQueryString = useTagsQueryString();
  return useMemo(() => tagStringToList(tagsQueryString), [tagsQueryString]);
};

const useActiveTags = () => {
  const history = useHistory();
  const tagsList = useTagsList();

  const setTags = useCallback(newTags => {
    history.push({
      search:
        newTags.length > 0
          ? `?${TAGS_QUERY_KEY}=${tagListToString(newTags)}`
          : ""
    });
  });

  const addTag = useCallback(
    tag => {
      const tagToAdd = tag.trim();
      tagToAdd && setTags([...tagsList, tagToAdd]);
    },
    [tagsList, setTags]
  );

  const clearAllTags = useCallback(() => setTags([]), []);

  const removeTag = useCallback(
    tagToRemove => setTags(tagsList.filter(tag => tag !== tagToRemove)),
    [tagsList, clearAllTags]
  );

  return {
    tagsList,
    addTag,
    clearAllTags,
    removeTag
  };
};

const TagExplorer = () => {
  const { tagsList, addTag, clearAllTags, removeTag } = useActiveTags();

  const routesWithMatchingTags =
    tagsList.length > 0
      ? ROOTS.filter(({ tags }) => tags.some(tag => tagsList.includes(tag)))
      : ROOTS;

  return (
    <Section>
      <SearchTags
        tagsList={tagsList}
        addTag={addTag}
        clearAllTags={clearAllTags}
        removeTag={removeTag}
      />
      <ItemGrid>
        {routesWithMatchingTags.map(({ name, path }) => (
          <FileButton key={path} name={name} to={path} />
        ))}
      </ItemGrid>
    </Section>
  );
};

const Section = styled.section`
  margin: auto;
  width: 90%;
`;

export default TagExplorer;
