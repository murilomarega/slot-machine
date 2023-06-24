import { useEffect, useState } from 'react';
import * as Styled from './styled';

import appleImg from '../../assets/fruits/apple.png';
import bananaImg from '../../assets/fruits/banana.png';
import cherryImg from '../../assets/fruits/cherry.png';
import lemonImg from '../../assets/fruits/lemon.png';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchReels, getReels } from '../../store/slices/slotMachine';
import { IFruitImages } from './interfaces';

const fruitImages: IFruitImages = {
  cherry: cherryImg,
  apple: appleImg,
  banana: bananaImg,
  lemon: lemonImg,
};

const SlotMachineGame = () => {
  const dispatch = useAppDispatch();

  const reels = useAppSelector(getReels);
  const slotMachineStatus = useAppSelector((state) => state.slotMachine.status);

  const [reelsAngles, setReelsAngles] = useState<number[]>([]);
  const [sortedItems, setSortedItems] = useState<number[]>([]);

  const getRandomNumber = (max: number) => Math.floor(Math.random() * max) + 1;
  const getRotateX = (itemIndex: number, angle: number) => itemIndex * angle;

  const itemSortedPositionX = (itemIndex: number) =>
    sortedItems[itemIndex] * reelsAngles[itemIndex];

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
    const newSortedItems: number[] = [];

    reels?.forEach((item) => {
      const sortedFruit = getRandomNumber(item.reels.length);
      newSortedItems.push(sortedFruit);
    });

    setSortedItems(newSortedItems);
  };

  useEffect(() => {
    sortItems();
  }, [reelsAngles]); // eslint-disable-line react-hooks/exhaustive-deps

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
          {!!sortedItems.length &&
            !!reels?.length &&
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
