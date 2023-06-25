import { useEffect, useState } from 'react';
import * as Styled from './styled';

import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { IPlay } from '../../store/interfaces';
import {
  decrementsCredits,
  fetchReels,
  getCredits,
  getHistoryOfPlays,
  getReels,
  getSlotMachineStatus,
  incrementCredits,
  incrementHistory,
} from '../../store/slices/slotMachine';
import { fruitImages, fruitWinsMap } from '../constants';

const SlotMachineGame = () => {
  const dispatch = useAppDispatch();

  const reels = useAppSelector(getReels);
  const slotMachineStatus = useAppSelector(getSlotMachineStatus);
  const playsHistory = useAppSelector(getHistoryOfPlays);
  const credits = useAppSelector(getCredits);

  const [reelsAngles, setReelsAngles] = useState<number[]>([]);
  const [sortedItems, setSortedItems] = useState<number[]>([]);

  const getRandomNumber = (max: number) => Math.floor(Math.random() * max);
  const getRotateX = (itemIndex: number, angle: number) => itemIndex * angle;

  const itemSortedPositionX = (itemIndex: number) =>
    sortedItems[itemIndex] * reelsAngles[itemIndex];

  const savePlayOnHistory = (sortedFruits: string[], creditsEarned = 0, isWin = false) => {
    const play: IPlay = {
      creditsEarned,
      isWin,
      sortedFruits,
    };
    dispatch(incrementHistory(play));
  };

  const sortedNumbersToFruits = (sortednumbers: number[]) => {
    const sortedFruits: string[] = [];
    sortednumbers.forEach((sortedNumber: number, index: number) => {
      sortedFruits.push(reels[index].reels[sortedNumber]);
    });
    return sortedFruits;
  };

  const checkIfPlayIsWin = (sortednumbers: number[]) => {
    const sortedFruits = sortedNumbersToFruits(sortednumbers);
    const fruit1 = sortedFruits[0];
    const fruit2 = sortedFruits[1];
    const fruit3 = sortedFruits[2];
    let earnedCoins = 0;

    /* no win */
    if (fruit1 !== fruit2 || (fruit1 === fruit2 && fruit1 !== fruit3 && fruit1 === 'lemon')) {
      savePlayOnHistory(sortedFruits);
      return;
    }

    /* win of 3 fruits  */
    if (fruit1 === fruit3) {
      earnedCoins = fruitWinsMap[fruit1].winWithThreeFruits;
      savePlayOnHistory(sortedFruits, earnedCoins, true);
      dispatch(incrementCredits(earnedCoins));
      return;
    }

    /* win of 2 fruits  */
    earnedCoins = fruitWinsMap[fruit1].winWithTwoFruits;
    savePlayOnHistory(sortedFruits, earnedCoins, true);
    dispatch(incrementCredits(earnedCoins));
    return;
  };

  const getReelsAngles = () => {
    const reelsAngles: number[] = [];

    reels?.forEach((item) => {
      const reelsLength = item.reels.length;
      const angle = Math.floor(360 / reelsLength);
      reelsAngles.push(angle);
    });

    setReelsAngles(reelsAngles);
  };

  const sortItems = () => {
    dispatch(decrementsCredits());
    const newSortedItems: number[] = [];

    reels?.forEach((item) => {
      const sortedFruit = getRandomNumber(item.reels.length);
      newSortedItems.push(sortedFruit);
    });

    setSortedItems(newSortedItems);
    checkIfPlayIsWin(newSortedItems);
  };

  useEffect(() => {
    getReelsAngles();
  }, [reels]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (slotMachineStatus === 'idle') {
      dispatch(fetchReels());
    }
  }, [slotMachineStatus, dispatch]);

  return (
    <>
      <Styled.Wrapper>
        <Styled.Glass />
        <Styled.SeparatorsWrapper>
          <Styled.Separator />
          <Styled.Separator />
        </Styled.SeparatorsWrapper>
        <Styled.SlotsWrapper>
          {!!reels?.length &&
            reels?.map((reel, reelIndex) => (
              <Styled.Slots
                itemSorted={itemSortedPositionX(reelIndex)}
                reelAnimationTime={reelIndex + 4}
              >
                {reel.reels.map((item: string, fruitIndex) => (
                  <Styled.FruitImg
                    src={fruitImages[item]}
                    alt={item}
                    key={item}
                    rotateX={getRotateX(fruitIndex, reelsAngles[reelIndex])}
                  />
                ))}
              </Styled.Slots>
            ))}
        </Styled.SlotsWrapper>
      </Styled.Wrapper>
      <button onClick={() => sortItems()}>sort</button>
      <br />
      <span style={{ color: 'white' }}>coins: {credits}</span>
      <br />
      <div>
        {!!playsHistory.length &&
          playsHistory.map((play) => (
            <div style={{ color: 'white' }}>
              is win: {String(play.isWin)} / credits earned: {play.creditsEarned} /
              {play.sortedFruits.map((fruit) => (
                <span> {fruit} </span>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default SlotMachineGame;

{
  /* <Styled.Slots>
{reels?.reel2.map((reel, index) => (
  <Styled.FruitImg src={fruitImages[reel]} alt={reel} key={reel} rotateX={index * 45} />
))}
</Styled.Slots>
<Styled.Slots>
{reels?.reel3.map((reel, index) => (
  <Styled.FruitImg src={fruitImages[reel]} alt={reel} key={reel} rotateX={index * 45} />
))}
</Styled.Slots> */
}
