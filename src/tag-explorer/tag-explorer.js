import React, { useState, useCallback } from "react";
import styled from "styled-components";

import ROOTS from "../routes.json";

const useTags = () => {
  const [tagInputText, setTagInputText] = useState("");
  const [tagsToSearch, setTagsToSearch] = useState([]);

  const addTag = useCallback(() => {
    const tagToAdd = tagInputText.trim();
    if (!tagToAdd) return;
    setTagsToSearch([...tagsToSearch, tagToAdd]);
    setTagInputText("");
  }, [tagsToSearch, tagInputText]);

  const removeTag = useCallback(
    tagToRemove =>
      setTagInputText(tagsToSearch.filter(tag => tag !== tagToRemove)),
    [tagsToSearch]
  );

  const updateTagInputText = useCallback(
    ({ target: { value } }) => setTagInputText(value),
    []
  );

  return { tagInputText, tagsToSearch, addTag, removeTag, updateTagInputText };
};

const TagExplorer = () => {
  const {
    tagInputText,
    tagsToSearch,
    addTag,
    removeTag,
    updateTagInputText
  } = useTags();

  return (
    <>
      <input
        type="search"
        value={tagInputText}
        onChange={updateTagInputText}
        on
      ></input>
      <button onClick={addTag}>add Tag</button>
      <p>{tagInputText}</p>
      <ActiveTagSection>
        {tagsToSearch.map(tag => (
          <ActiveTag>{tag}</ActiveTag>
        ))}
      </ActiveTagSection>
    </>
  );
};

const ActiveTagSection = styled.section`
  display: flex;
`;

const ActiveTag = styled.div`
  padding: 0.2rem;
  margin: 0.1rem;
  background: cyan;
`;

export default TagExplorer;
