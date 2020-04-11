import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import Button from "../components/button";

const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = useCallback(
    ({ target: { value } }) => {
      setSearchTerm(value);
    },
    [setSearchTerm]
  );

  return { searchTerm, changeSearchTerm };
};

const FlashCards = ({ allFlashCards, setFlashCardByIndex }) => {
  const { searchTerm, changeSearchTerm } = useSearchTerm();

  const flashCardOptions = searchFlashCards(searchTerm, allFlashCards) || [];

  return (
    <AlignItemsCenterContainer>
      <h2>Select a flash card to view</h2>
      <label>
        Search for your flash card:{" "}
        <input value={searchTerm} onChange={changeSearchTerm} />
      </label>
      {flashCardOptions.map(({ question }, index) => (
        <ButtonWithMargin
          key={question}
          onClick={() => setFlashCardByIndex(index)}
        >
          {ReactHtmlParser(question)}
        </ButtonWithMargin>
      ))}
    </AlignItemsCenterContainer>
  );
};

const searchFlashCards = (searchTerm, flashCards) => {
  if (!searchTerm) return flashCards;
  return flashCards.filter(({ question }) =>
    new RegExp(searchTerm, "i").test(question)
  );
};

const AlignItemsCenterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWithMargin = styled(Button)`
  margin: 0.5rem 0;
`;

export default FlashCards;
