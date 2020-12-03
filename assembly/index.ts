import { context, storage, logging } from "near-sdk-as";

export function getValue(key: string): string | null {
  return storage.get<string>(key);
}

export function setValue(key:string, value: string): void {
  logging.log("Data Stored:")
  logging.log("Key: " + key);
  logging.log("Value: " + value);
  storage.setString(key, value);
}