import { AVLTree, context, PersistentMap, PersistentVector } from 'near-sdk-as';

export const myPersistentMap = new PersistentMap<string, string>("map");

export const myAVLTree = new AVLTree<string, string>("avl");
