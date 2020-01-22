import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import { over, shuffle, isEmpty } from "lodash";
import randomElement from "als-random/element";
import Button from "../components/button";
import FLASH_CARDS_LIST from "../flash-cards.json";

const shuffledFlashCards = () => shuffle(FLASH_CARDS_LIST).slice(0, 20);

const useCurrentFlashCard = () => {
  const [currentFlashCard, setCurrentFlashCard] = useState(
    randomElement(FLASH_CARDS_LIST)
  );

  const nextRandomFlashCard = useMemo(() => {
    const flashCards = shuffledFlashCards();
    return () => {
      const nextFlashCard = flashCards.pop();
      if (isEmpty(flashCards)) flashCards.push(...shuffledFlashCards());

      setCurrentFlashCard(nextFlashCard);
    };
  }, [setCurrentFlashCard]);

  return { currentFlashCard, nextRandomFlashCard };
};

const useShouldShowAnswer = () => {
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false);
  const setShowAnswer = useCallback(() => setShouldShowAnswer(true), []);
  const setHideAnswer = useCallback(() => setShouldShowAnswer(false), []);
  return { shouldShowAnswer, setShowAnswer, setHideAnswer };
};

const FlashCards = () => {
  const { currentFlashCard, nextRandomFlashCard } = useCurrentFlashCard();
  const {
    shouldShowAnswer,
    setShowAnswer,
    setHideAnswer
  } = useShouldShowAnswer();

  return (
    <FlashCard>
      <Button onClick={over([setHideAnswer, nextRandomFlashCard])}>
        Next Flash Card
      </Button>
      <Header>Question</Header>
      <section
        dangerouslySetInnerHTML={{ __html: currentFlashCard.question }}
      />
      <section>
        <hr />
        <Header>Answer</Header>
        {shouldShowAnswer ? (
          <>
            <HideAnswerButton onClick={setHideAnswer}>
              Hide Answer
            </HideAnswerButton>
            <div
              dangerouslySetInnerHTML={{ __html: currentFlashCard.answer }}
            />
          </>
        ) : (
          <ShowAnswerButton onClick={setShowAnswer}>
            <strong>Show Answer</strong>
          </ShowAnswerButton>
        )}
      </section>
    </FlashCard>
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
