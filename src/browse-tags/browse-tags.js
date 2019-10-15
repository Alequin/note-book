import React from "react";
import styled from "styled-components";
import Tag from "../components/tag";
import allTags from "../utils/all-tags";
import useActiveTags from "../utils/use-active-tags";

const BrowseTags = () => {
  const { tagsList, addTag, removeTag } = useActiveTags();
  return (
    <FlexBox>
      {allTags().map((tag, index) => {
        const shouldHighlight = tagsList.includes(tag);
        return (
          <Tag
            key={index + tag}
            large
            highlight={shouldHighlight}
            onClick={() => (shouldHighlight ? removeTag(tag) : addTag(tag))}
          >
            {tag}
          </Tag>
        );
      })}
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`;

export default BrowseTags;
