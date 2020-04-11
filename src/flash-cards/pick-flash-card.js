import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import Button from "../components/button";

const FlashCards = ({ allFlashCards, setFlashCardByIndex }) => {
  return (
    <AlignItemsCenterContainer>
      <h2>Select a flash card to view</h2>
      {allFlashCards.map(({ question }, index) => (
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

const AlignItemsCenterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWithMargin = styled(Button)`
  margin: 0.5rem 0;
`;

export default FlashCards;
