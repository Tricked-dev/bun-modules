import { getModule, type PKG } from "../getModule";

import modules from "../modules.json";

let cache: PKG[] = [];

export const get = async () => {
  if (cache?.length !== 0) {
    return cache;
  }
  const temp = [];

  for (const module of modules) {
    temp.push(getModule(module));
  }
  cache = await Promise.all(temp);
  return { body: cache };
};
