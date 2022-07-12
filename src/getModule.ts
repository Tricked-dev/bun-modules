//https://api.npms.io/v2/package/deno
import modules from "./modules.json";

export async function getModule(pkg: string): Promise<PKG> {
  let res = await (await fetch("https://replicate.npmjs.com/" + pkg)).json();
  return res;
}
export async function getAllModules(): Promise<PKG[]> {
  const temp = [];

  for (const module of modules) {
    temp.push(getModule(module));
  }
  const res = await Promise.all(temp);
  return res.filter((x) => x?.name);
}

export interface PKG {
  _id: string;
  _rev: string;
  name: string;
  "dist-tags": DistTags;
  versions: Record<string, any>;
  time: Record<string, string>;
  maintainers: Maintainer[];
  description: string;
  homepage: string;
  keywords: string[];
  repository: Repository;
  author: Author;
  bugs: Bugs;
  readme: string;
  readmeFilename: string;
  users: Users;
  license: string;
}

export interface DistTags {
  latest: string;
}

export interface Repository {
  type: string;
  url: string;
}

export interface Author {
  name: string;
  email: string;
  url: string;
}

export interface Bugs {
  url: string;
}

export interface NpmUser {
  name: string;
  email: string;
}

export interface Dist {
  integrity: string;
  shasum: string;
  tarball: string;
  fileCount: number;
  unpackedSize: number;
  "npm-signature": string;
  signatures: Signature[];
}

export interface Signature {
  keyid: string;
  sig: string;
}

export interface Maintainer {
  name: string;
  email: string;
}

export interface NpmOperationalInternal {
  host: string;
  tmp: string;
}

export interface Users {
  rsp: boolean;
}
