import { useEffect, useState } from 'react';
import * as Styled from './styled';

import { v4 as uuidv4 } from 'uuid';
import { fruitImages, fruitWinsMap, playCost, reelsAnimationTimes } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { IPlay } from '../../store/interfaces';
import {
  decrementsCredits,
  fetchReels,
  getCredits,
  getReels,
  getSlotMachineStatus,
  incrementCredits,
  incrementHistory,
} from '../../store/slices/slotMachine';
import PlaysHistory from '../history';

const SlotMachineGame = () => {
  const dispatch = useAppDispatch();

  const reels = useAppSelector(getReels);
  const slotMachineStatus = useAppSelector(getSlotMachineStatus);
  const credits = useAppSelector(getCredits);

  const [reelsAngles, setReelsAngles] = useState<number[]>([]);
  const [oldSortedItems, setOldSortedItems] = useState<number[]>([0, 0, 0]);
  const [newSortedItems, setNewSortedItems] = useState<number[]>([0, 0, 0]);

  const [isPlayOngoing, setIsPlayOngoing] = useState(false);

  const getRandomNumber = (max: number) => Math.floor(Math.random() * max);
  const getRotateX = (itemIndex: number, angle: number) => itemIndex * angle;

  const itemSortedPositionX = (arr: number[], itemIndex: number) =>
    arr[itemIndex] * reelsAngles[itemIndex];

  const savePlayOnHistory = (sortedFruits: string[], creditsEarned = 0, isWin = false) => {
    const play: IPlay = {
      uuid: uuidv4(),
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
    const newItems: number[] = [];

    reels?.forEach((item) => {
      const sortedFruit = getRandomNumber(item.reels.length);
      newItems.push(sortedFruit);
    });

    setOldSortedItems(newSortedItems);
    setNewSortedItems(newItems);

    setIsPlayOngoing(true);
    setTimeout(() => {
      checkIfPlayIsWin(newItems);
      setIsPlayOngoing(false);
    }, reelsAnimationTimes[reelsAnimationTimes.length - 1]);
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
                $currentSortedItem={itemSortedPositionX(oldSortedItems, reelIndex)}
                $newSortedItem={itemSortedPositionX(newSortedItems, reelIndex)}
                $reelAnimationTime={reelsAnimationTimes[reelIndex]}
                $isPlayOngoing={isPlayOngoing}
                key={uuidv4()}
              >
                {reel.reels.map((item: string, fruitIndex) => (
                  <Styled.FruitImg
                    src={fruitImages[item]}
                    alt={item}
                    key={uuidv4()}
                    $rotateX={getRotateX(fruitIndex, reelsAngles[reelIndex])}
                  />
                ))}
              </Styled.Slots>
            ))}
        </Styled.SlotsWrapper>
      </Styled.Wrapper>
      <Styled.BalanceWrapper>
        <Styled.Ammount>
          Balance <Styled.Quantity>x</Styled.Quantity>
          {credits}
          <Styled.IconCoin />
        </Styled.Ammount>

        <Styled.Ammount>
          Spin cost <Styled.Quantity>x</Styled.Quantity>
          {playCost}
          <Styled.IconCoin />
        </Styled.Ammount>
      </Styled.BalanceWrapper>

      <Styled.SortButtonWrapper>
        <Styled.SortButton onClick={() => sortItems()} disabled={isPlayOngoing || credits <= 0}>
          <span>SPIN</span>
        </Styled.SortButton>
      </Styled.SortButtonWrapper>

      <Styled.HistoryWrapper>
        <PlaysHistory />
      </Styled.HistoryWrapper>
    </>
  );
};

export default SlotMachineGame;
