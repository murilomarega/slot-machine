import appleImg from '../assets/fruits/apple.png';
import bananaImg from '../assets/fruits/banana.png';
import cherryImg from '../assets/fruits/cherry.png';
import lemonImg from '../assets/fruits/lemon.png';
import { IFruitImages } from '../interfaces/general.interface';
import { IWinsKeyValues } from '../store/interfaces';

const playCost = 1;

const fruitImages: IFruitImages = {
  cherry: cherryImg,
  apple: appleImg,
  banana: bananaImg,
  lemon: lemonImg,
};

const fruitWinsMap: IWinsKeyValues = {
  ['cherries']: {
    winWithTwoFruits: 40,
    winWithThreeFruits: 50,
  },
  ['apple']: {
    winWithTwoFruits: 10,
    winWithThreeFruits: 20,
  },
  ['banana']: {
    winWithTwoFruits: 5,
    winWithThreeFruits: 15,
  },
  ['lemon']: {
    winWithThreeFruits: 3,
    winWithTwoFruits: 0,
  },
};

const reelsAnimationTimes = [4000, 5500, 7000];

export { fruitImages, fruitWinsMap, playCost, reelsAnimationTimes };
