import React, { useState, useCallback } from "react";
import styled from "styled-components";

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
    [setTagsToSearch, setTagInputText]
  );

  const removeTag = useCallback(
    tagToRemove =>
      setTagInputText(tagsToSearch.filter(tag => tag !== tagToRemove)),
    [tagsToSearch]
  );

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
      <AddTagButton
        onClick={useCallback(() => {
          addTag(tagInputText);
          clearTagInputText();
        }, [tagInputText, addTag])}
      >
        Add Tag
      </AddTagButton>
      <ActiveTagSection>
        {tagsToSearch.map(tag => (
          <ActiveTag>{tag}</ActiveTag>
        ))}
      </ActiveTagSection>
      <hr />
    </Section>
  );
};

const Section = styled.section`
  margin: auto;
  width: 80%;
`;

const ActiveTagSection = styled.section`
  display: flex;
`;

const TagInput = styled.input`
  display: block;
  width: 100%;
  margin: 1rem 0;
  font-size: 1.2rem;
  border: 1px solid black;
`;

const AddTagButton = styled.button`
  display: block;
  width: 100%;
  font-size: 1rem;
`;

const ActiveTag = styled.div`
  padding: 0.2rem;
  margin: 0.1rem;
  background: cyan;
`;

export default TagExplorer;
