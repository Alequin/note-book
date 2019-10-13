import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import ItemGrid from "../components/item-grid";
import FileButton from "../components/file-button";
import SearchTags from "./search-tags";

import ROOTS from "../routes.json";

const TAGS_QUERY_KEY = "tags";
const TAG_DELIMETER = "%2C";

const useTagsQueryValue = () => {
  const { search } = useLocation();
  return useMemo(() => {
    const queryTags = new URLSearchParams(search).get(TAGS_QUERY_KEY);
    return queryTags ? queryTags.split(",") : [];
  }, [search]);
};

const useActiveTags = () => {
  const history = useHistory();
  const selectedTags = useTagsQueryValue();

  const setTags = useCallback(newTags => {
    history.push({
      search:
        newTags.length > 0
          ? `?${TAGS_QUERY_KEY}=${newTags.join(TAG_DELIMETER)}`
          : ""
    });
  });

  const addTag = useCallback(
    tag => {
      const tagToAdd = tag.trim();
      tagToAdd && setTags([...selectedTags, tagToAdd]);
    },
    [selectedTags, setTags]
  );

  const clearAllTags = useCallback(
    () =>
      history.push({
        search: ""
      }),
    []
  );

  const removeTag = useCallback(
    tagToRemove => setTags(selectedTags.filter(tag => tag !== tagToRemove)),
    [selectedTags, clearAllTags]
  );

  return {
    selectedTags,
    addTag,
    clearAllTags,
    removeTag
  };
};

const TagExplorer = () => {
  const { selectedTags, addTag, clearAllTags, removeTag } = useActiveTags();

  const routesWithMatchingTags =
    selectedTags.length > 0
      ? ROOTS.filter(({ tags }) => tags.some(tag => selectedTags.includes(tag)))
      : ROOTS;

  return (
    <Section>
      <SearchTags
        selectedTags={selectedTags}
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
