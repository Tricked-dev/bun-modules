import { getAllModules, type PKG } from "../getModule";

let cache: PKG[] = [];

export const get = async () => {
  if (cache?.length !== 0) {
    return { body: cache };
  }
  cache = await getAllModules();

  return { body: cache };
};
