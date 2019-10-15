import React from "react";
import styled from "styled-components";
import Tag from "../components/tag";
import UnstyledLink from "../components/unstyled-link";
import Button from "../components/button";
import allTags from "../utils/all-tags";
import useActiveTags from "../utils/use-active-tags";
import TAG_QUERY_KEY from "../utils/tags-query-key";
import tagListToString from "../utils/tag-list-to-string";

const BrowseTags = () => {
  const { tagsList, addTag, removeTag } = useActiveTags();
  const tagQueryString =
    tagsList.length > 0 ? `?${TAG_QUERY_KEY}=${tagListToString(tagsList)}` : "";

  return (
    <Section>
      <UnstyledLink to={`tag-explorer${tagQueryString}`}>
        <Button>Search with selected tags</Button>
      </UnstyledLink>
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
    </Section>
  );
};

const Section = styled.div`
  padding: 1rem;
  width: 80%;
  margin: auto;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default BrowseTags;
