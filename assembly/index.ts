import { storage, logging, PersistentVector } from "near-sdk-as";
import { myMap, myUnorderedMap, myTreeMap } from "./model";

export function getValue(key: string): string | null {
  return storage.get<string>(key);
}

export function ping():void{
  
}

export function setString(key:string, value: string): void {
  logging.log("Data Stored");
  logging.log("Key: " + key);
  logging.log("Value: " + value);
  storage.set<string>(key, value);
}

export function setNumber(key: string, value: u32): void {
  logging.log("Data Stored");
  logging.log("Key: " + key);
  logging.log("Value: " + value.toString());
  storage.set<u32>(key, value);
}

export function setVectorValue(value: string): void {
  logging.log(value + " stored under \"name\"");
  let vector = new PersistentVector<string>("name");
  vector.push(value)
}

@nearBindgen
class SimpleMap {
  key: string;
  value: string;
}

export function add_map(mapName: SimpleMap): void {
  myMap.set(mapName.key, mapName.value);
  logging.log(mapName.key);
}

export function add_unordered_map(mapName: SimpleMap): void {
  myUnorderedMap.set(mapName.key, mapName.value);
}

export function add_tree_map(mapName: SimpleMap): void {
  myTreeMap.set(mapName.key, mapName.value);
}

export function get_map(key: string): void {
  myMap.getSome(key);
}

export function get_unordered_map(key: string): void {
  myUnorderedMap.getSome(key);
}

export function get_tree_map(key: string): void {
  myTreeMap.getSome(key);
}
