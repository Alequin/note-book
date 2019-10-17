import React, { useState, useCallback } from "react";
import styled from "styled-components";
import UnstyledLink from "../components/unstyled-link";
import Button from "../components/button";
import Tag from "../components/tag";
import useTagsQueryString from "../utils/use-tags-query-string";
import TAGS_QUERY_KEY from "../utils/tags-query-key";
import REACT_ROUTES from "../react-routes";

const useTagsInput = () => {
  const [tagInputText, setTagInputText] = useState("");

  const clearTagInputText = useCallback(() => setTagInputText(""), [
    setTagInputText
  ]);

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

const SearchTags = ({ tagsList, addTag, clearAllTags, removeTag }) => {
  const {
    tagInputText,
    clearTagInputText,
    updateTagInputText
  } = useTagsInput();

  const tagsQueryString = useTagsQueryString();
  const browseTagsQueryString = tagsQueryString
    ? `?${TAGS_QUERY_KEY}=${tagsQueryString}`
    : "";

  return (
    <>
      <TagInput
        type="search"
        value={tagInputText}
        onChange={updateTagInputText}
        on
      />
      <InlineTagButton
        onClick={useCallback(() => {
          addTag(tagInputText);
          clearTagInputText();
        }, [tagInputText, addTag, clearTagInputText])}
      >
        Add Tag
      </InlineTagButton>
      <UnstyledLink to={`${REACT_ROUTES.browseTags}${browseTagsQueryString}`}>
        <InlineTagButton>Browse Tags</InlineTagButton>
      </UnstyledLink>
      <Button onClick={clearAllTags}>Clear Tags</Button>
      <ActiveTags tags={tagsList} removeTag={removeTag}></ActiveTags>
      <Divider />
    </>
  );
};

const ActiveTags = ({ tags, removeTag }) => (
  <ActiveTagSection>
    {tags.map((tag, index) => (
      <Tag key={index + tag} onClick={() => removeTag(tag)}>
        {tag}
      </Tag>
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

const InlineTagButton = styled(Button)`
  display: inline;
  width: 50%;
`;

const Divider = styled.hr`
  margin: 1rem 0;
`;

export default SearchTags;
