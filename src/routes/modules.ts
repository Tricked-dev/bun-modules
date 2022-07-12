import { getAllModules, type Module } from "../getModule";

let cache: Module[] = [];

export const get = async () => {
  if (cache?.length !== 0) {
    return { body: cache };
  }
  cache = await getAllModules();

  return { body: cache };
};
