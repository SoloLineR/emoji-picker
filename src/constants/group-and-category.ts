import { CategoryNode } from '../types/types';

export const dataSource: CategoryNode[] = [
  {
    name: 'smileys-and-people',
    children: [
      { name: 'body' },
      { name: 'cat-face' },
      { name: 'clothing' },
      { name: 'creature-face' },
      { name: 'emotion' },
      { name: 'face-negative' },
      { name: 'face-neutral' },
      { name: 'face-positive' },
      { name: 'face-role' },
      { name: 'face-sick' },
      { name: 'family' },
      { name: 'monkey-face' },
      { name: 'person' },
      { name: 'person-activity' },
      { name: 'person-gesture' },
      { name: 'person-role' },
      { name: 'skin-tone' },
    ],
  },
  {
    name: 'animals-and-nature',
    children: [
      { name: 'animal-amphibian' },
      { name: 'animal-bird' },
      { name: 'animal-bug' },
      { name: 'animal-mammal' },
      { name: 'animal-marine' },
      { name: 'animal-reptile' },
      { name: 'plant-flower' },
      { name: 'plant-other' },
    ],
  },
  {
    name: 'food-and-drink',
    children: [
      { name: 'dishware' },
      { name: 'drink' },
      { name: 'food-asian' },
      { name: 'food-fruit' },
      { name: 'food-prepared' },
      { name: 'food-sweet' },
      { name: 'food-vegetable' },
    ],
  },
  {
    name: 'travel-and-places',
    children: [{ name: 'travel-and-places' }],
  },
  {
    name: 'activities',
    children: [{ name: 'activities' }],
  },
  {
    name: 'objects',
    children: [{ name: 'objects' }],
  },
  {
    name: 'symbols',
    children: [{ name: 'symbols' }],
  },
  {
    name: 'flags',
    children: [{ name: 'flags' }],
  },
];
