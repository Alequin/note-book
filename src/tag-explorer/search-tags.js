import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { BlankButton } from "../shared-css";

const useTagsInput = () => {
  const [tagInputText, setTagInputText] = useState("");

  const clearTagInputText = useCallback(() => {
    setTagInputText("");
  }, [setTagInputText]);

  const updateTagInputText = useCallback(
    ({ target: { value } }) => setTagInputText(value),
    [setTagInputText]
  );

  return {
    tagInputText,
    clearTagInputText,
    updateTagInputText
  };
};

const SearchTags = ({ selectedTags, addTag, clearTags, removeTag }) => {
  const {
    tagInputText,
    clearTagInputText,
    updateTagInputText
  } = useTagsInput();

  return (
    <>
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
      <ActiveTags tags={selectedTags} removeTag={removeTag}></ActiveTags>
      <Divider />
    </>
  );
};

const ActiveTags = ({ tags, removeTag }) => (
  <ActiveTagSection>
    {tags.map((tag, index) => (
      <ActiveTagButton key={index + tag} onClick={() => removeTag(tag)}>
        {tag}
      </ActiveTagButton>
    ))}
  </ActiveTagSection>
);

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

export default SearchTags;
