import { AVLTree, PersistentMap, PersistentUnorderedMap } from 'near-sdk-as';

export const myMap = new PersistentMap<string, string>("map");
export const myUnorderedMap = new PersistentUnorderedMap<string, string>("map");
export const myTreeMap = new AVLTree<string, string>("avl");
