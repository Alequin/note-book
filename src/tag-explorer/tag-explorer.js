import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { BlankButton } from "../shared-css";

import ROOTS from "../routes.json";

const useTags = () => {
  const [tagInputText, setTagInputText] = useState("");
  const [tagsToSearch, setTagsToSearch] = useState([]);

  const addTag = useCallback(
    tag => {
      const tagToAdd = tag.trim();
      if (!tagToAdd) return;
      setTagsToSearch([...tagsToSearch, tagToAdd]);
    },
    [tagsToSearch, setTagsToSearch, setTagInputText]
  );

  const removeTag = useCallback(
    tagToRemove =>
      setTagInputText(tagsToSearch.filter(tag => tag !== tagToRemove)),
    [tagsToSearch]
  );

  const clearTags = useCallback(() => setTagsToSearch([]));

  const clearTagInputText = useCallback(() => {
    setTagInputText("");
  }, [setTagInputText]);

  const updateTagInputText = useCallback(
    ({ target: { value } }) => setTagInputText(value),
    []
  );

  return {
    tagInputText,
    tagsToSearch,
    addTag,
    clearTags,
    removeTag,
    clearTagInputText,
    updateTagInputText
  };
};

const TagExplorer = () => {
  const {
    tagInputText,
    tagsToSearch,
    addTag,
    clearTags,
    removeTag,
    clearTagInputText,
    updateTagInputText
  } = useTags();

  return (
    <Section>
      <TagInput
        type="search"
        value={tagInputText}
        onChange={updateTagInputText}
        on
      />
      <TagButton
        onClick={useCallback(() => {
          addTag(tagInputText);
          clearTagInputText();
        }, [tagInputText, addTag])}
      >
        Add Tag
      </TagButton>
      <TagButton onClick={clearTags}>Clear Tags</TagButton>
      <ActiveTags tags={tagsToSearch}></ActiveTags>
      <Divider />
    </Section>
  );
};

const ActiveTags = ({ tags }) => (
  <ActiveTagSection>
    {tags.map((tag, index) => (
      <ActiveTagButton key={index + tag}>{tag}</ActiveTagButton>
    ))}
  </ActiveTagSection>
);

const Section = styled.section`
  margin: auto;
  width: 90%;
`;

const ActiveTagSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TagInput = styled.input`
  display: block;
  width: 100%;
  margin: 1rem 0;
  font-size: 1.2rem;
  border: 1px solid black;
`;

const TagButton = styled(BlankButton)`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 0;
`;

const ActiveTagButton = styled(BlankButton)`
  padding: 0.5rem;
  margin: 0.1rem;
  border: 1px solid black;
`;

const Divider = styled.hr`
  margin: 1rem 0;
`;

export default TagExplorer;
