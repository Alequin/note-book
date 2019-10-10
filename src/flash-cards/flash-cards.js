import React, { useState, useCallback } from "react";
import styled from "styled-components";
import randomElement from "als-random/element";
import { lightGreyBorder, BlankButton } from "../shared-css";
import FLASH_CARDS_LIST from "../flash-cards.json";

const useCurrentFlashCard = () => {
  const [currentFlashCard, setCurrentFlashCard] = useState(
    randomElement(FLASH_CARDS_LIST)
  );

  const nextRandomFlashCard = () =>
    setCurrentFlashCard(randomElement(FLASH_CARDS_LIST));

  return { currentFlashCard, nextRandomFlashCard };
};

const useShouldShowAnswer = () => {
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false);

  const setShowAnswer = useCallback(() => setShouldShowAnswer(true));
  const setHideAnswer = useCallback(() => setShouldShowAnswer(false));

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
      <Section
        dangerouslySetInnerHTML={{ __html: currentFlashCard.question }}
      />
      <Section>
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
          <ShowAnswerSection onClick={setShowAnswer}>
            <strong>Show Answer</strong>
          </ShowAnswerSection>
        )}
      </Section>
    </FlashCard>
  );
};

const FlashCard = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Section = styled.section`
  margin: 2rem;
`;

const HideAnswerButton = styled(BlankButton)`
  ${lightGreyBorder};
  padding: 0.5rem;
`;

const ShowAnswerSection = styled(BlankButton)`
  display: flex;
  width: 90%;
  height: 8.2rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  ${lightGreyBorder};
`;

export default FlashCards;
