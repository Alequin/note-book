import React, { useState, useCallback } from "react";
import styled from "styled-components";
import over from "lodash/over";
import randomElement from "als-random/element";
import Button from "../components/button";
import FLASH_CARDS_LIST from "../flash-cards.json";
import FlashCardViewer from "./flash-card-viewer";

const useCurrentFlashCard = () => {
  const [currentFlashCard, setCurrentFlashCard] = useState(
    randomElement(FLASH_CARDS_LIST)
  );

  const nextRandomFlashCard = useCallback(
    () => setCurrentFlashCard(randomElement(FLASH_CARDS_LIST)),
    [setCurrentFlashCard]
  );

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
    <>
      <Button onClick={over([setHideAnswer, nextRandomFlashCard])}>
        Next Flash Card
      </Button>
      <FlashCardViewer
        currentFlashCard={currentFlashCard}
        shouldShowAnswer={shouldShowAnswer}
        setShowAnswer={setShowAnswer}
        setHideAnswer={setHideAnswer}
      />
    </>
  );
};

export default FlashCards;
