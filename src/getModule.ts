const blacklisted = [
  "random-bunny",
  "test-package-bun-types",
  "test-package-bun-types-123",
  "test-package-bun-types-2",
];

export async function getAllModules() {
  const modules: PKG = await fetch(
    `https://registry.npmjs.com/-/v1/search?size=250&text=keywords:bun,bun.js`,
  ).then((r) => r.json());
  return modules.objects.filter((x) => !blacklisted.includes(x.package.name));
}
export interface PKG {
  objects: Module[];
  total: number;
  time: string;
}

export interface Module {
  package: Package;
  flags?: Flags;
  score: Score;
  searchScore: number;
}

export interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: Links;
  author?: Author;
  publisher: Publisher;
  maintainers: Maintainer[];
}

export interface Links {
  npm: string;
  homepage?: string;
  bugs?: string;
  repository?: string;
}

export interface Author {
  name: string;
  email?: string;
  username?: string;
  url?: string;
}

export interface Publisher {
  username: string;
  email: string;
}

export interface Maintainer {
  username: string;
  email: string;
}

export interface Flags {
  unstable: boolean;
}

export interface Score {
  final: number;
  detail: Detail;
}

export interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}
