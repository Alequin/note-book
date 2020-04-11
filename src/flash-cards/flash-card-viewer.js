import React, { useState, useCallback } from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import Button from "../components/button";

const FlashCards = ({
  currentFlashCard,
  shouldShowAnswer,
  setShowAnswer,
  setHideAnswer
}) => {
  return (
    <>
      <FlashCard>
        <Header>Question</Header>
        <>{ReactHtmlParser(currentFlashCard.question)}</>
        <section>
          <hr />
          <Header>Answer</Header>
          {shouldShowAnswer ? (
            <>
              <HideAnswerButton onClick={setHideAnswer}>
                Hide Answer
              </HideAnswerButton>
              <>{ReactHtmlParser(currentFlashCard.answer)}</>
            </>
          ) : (
            <ShowAnswerButton onClick={setShowAnswer}>
              <strong>Show Answer</strong>
            </ShowAnswerButton>
          )}
        </section>
      </FlashCard>
    </>
  );
};

const FlashCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

const Header = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;

const HideAnswerButton = styled(Button)`
  padding: 0.5rem;
`;

const ShowAnswerButton = styled(Button)`
  display: flex;
  width: 90%;
  height: 8.2rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export default FlashCards;
