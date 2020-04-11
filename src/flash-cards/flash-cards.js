import React, { useState, useCallback } from "react";
import { over } from "lodash";
import randomElement from "als-random/element";
import Button from "../components/button";
import FLASH_CARDS_LIST from "../flash-cards.json";
import FlashCardViewer from "./flash-card-viewer";
import PickFlashCard from "./pick-flash-card";

const useFlashCards = () => {
  const [currentFlashCard, setCurrentFlashCard] = useState(
    randomElement(FLASH_CARDS_LIST)
  );

  const nextRandomFlashCard = useCallback(
    () => randomElement(FLASH_CARDS_LIST),
    []
  );

  const setFlashCardByIndex = useCallback(
    (index) => setCurrentFlashCard(FLASH_CARDS_LIST[index]),
    [setCurrentFlashCard]
  );

  return { currentFlashCard, setFlashCardByIndex, nextRandomFlashCard };
};

const useShouldShowPickFlashCardPage = () => {
  const [
    shouldShowPickFlashCardPage,
    setShouldShowPickFlashCardPage
  ] = useState(false);

  const setShowPickFlashCardPage = useCallback(() => {
    setShouldShowPickFlashCardPage(true);
  }, []);

  const setHidePickFlashCardPage = useCallback(() => {
    setShouldShowPickFlashCardPage(false);
  }, []);

  return {
    shouldShowPickFlashCardPage,
    setShowPickFlashCardPage,
    setHidePickFlashCardPage
  };
};

const useShouldShowAnswer = () => {
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false);
  const setShowAnswer = useCallback(() => setShouldShowAnswer(true), []);
  const setHideAnswer = useCallback(() => setShouldShowAnswer(false), []);
  return { shouldShowAnswer, setShowAnswer, setHideAnswer };
};

const FlashCards = () => {
  const {
    currentFlashCard,
    setFlashCardByIndex,
    nextRandomFlashCard
  } = useFlashCards();

  const {
    shouldShowPickFlashCardPage,
    setShowPickFlashCardPage,
    setHidePickFlashCardPage
  } = useShouldShowPickFlashCardPage();

  const {
    shouldShowAnswer,
    setShowAnswer,
    setHideAnswer
  } = useShouldShowAnswer();

  return (
    <>
      <Button onClick={setShowPickFlashCardPage}>
        Pick specific flash card
      </Button>
      <Button
        onClick={over([
          setHideAnswer,
          nextRandomFlashCard,
          setHidePickFlashCardPage
        ])}
      >
        Next Flash Card
      </Button>
      <hr />
      {shouldShowPickFlashCardPage ? (
        <PickFlashCard
          allFlashCards={FLASH_CARDS_LIST}
          setFlashCardByIndex={over([
            setFlashCardByIndex,
            setHidePickFlashCardPage
          ])}
        />
      ) : (
        <FlashCardViewer
          currentFlashCard={currentFlashCard}
          shouldShowAnswer={shouldShowAnswer}
          setShowAnswer={setShowAnswer}
          setHideAnswer={setHideAnswer}
        />
      )}
    </>
  );
};

export default FlashCards;
