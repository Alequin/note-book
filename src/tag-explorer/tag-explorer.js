import React, { useState, useCallback } from "react";
import styled from "styled-components";
import SearchTags from "./search-tags";

import ROOTS from "../routes.json";

const useActiveTags = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const addTag = useCallback(
    tag => {
      const tagToAdd = tag.trim();
      if (!tagToAdd) return;
      setSelectedTags([...selectedTags, tagToAdd]);
    },
    [selectedTags, setSelectedTags]
  );

  const removeTag = useCallback(
    tagToRemove =>
      setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove)),
    [selectedTags, setSelectedTags]
  );

  const clearTags = useCallback(() => setSelectedTags([]), []);

  return {
    selectedTags,
    addTag,
    clearTags,
    removeTag
  };
};

const TagExplorer = () => {
  const { selectedTags, addTag, clearTags, removeTag } = useActiveTags();

  const routesWithMatchingTags =
    selectedTags.length > 0
      ? ROOTS.filter(({ tags }) => tags.some(tag => selectedTags.includes(tag)))
      : ROOTS;

  return (
    <Section>
      <SearchTags
        selectedTags={selectedTags}
        addTag={addTag}
        clearTags={clearTags}
        removeTag={removeTag}
      />
      {routesWithMatchingTags.map(({ name, path }) => (
        <div key={path}>{name}</div>
      ))}
    </Section>
  );
};

const Section = styled.section`
  margin: auto;
  width: 90%;
`;

export default TagExplorer;
