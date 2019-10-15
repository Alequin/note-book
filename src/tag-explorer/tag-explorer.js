import React from "react";
import styled from "styled-components";
import ItemGrid from "../components/item-grid";
import FileButton from "../components/file-button";
import useActiveTags from "../utils/use-active-tags";
import SearchTags from "./search-tags";

import ROUTES from "../routes.json";

const TagExplorer = () => {
  const { tagsList, addTag, clearAllTags, removeTag } = useActiveTags();

  const routesWithMatchingTags =
    tagsList.length > 0
      ? ROUTES.filter(({ tags: fileTags }) =>
          tagsList.every(tag => fileTags.includes(tag))
        )
      : ROUTES;

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
