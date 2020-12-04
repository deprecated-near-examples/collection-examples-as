import { context, storage, logging } from "near-sdk-as";

export function getValue(key: string): string | null {
  return storage.get<string>(key);
}

export function setString(key:string, value: string): void {
  logging.log("Data Stored:");
  logging.log("Key: " + key);
  logging.log("Value: " + value);
  storage.set<string>(key, value);
}

export function setNumber(key: string, value: u32): void {
  logging.log("Data Stored:");
  logging.log("Key: " + key);
  logging.log("Value: " + value.toString());
  storage.set<u32>(key, value);
}