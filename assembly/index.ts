import { context, storage, logging } from "near-sdk-as";

export function getValues(key: string): string | null {
  return storage.get<string>(key);
}

export function setValue(key:string, value: string): void {
  logging.log("Storing data...")
  logging.log("Key: " + key);
  logging.log("Value: " + value);
  storage.setString(key, value);
}