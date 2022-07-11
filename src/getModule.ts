//https://api.npms.io/v2/package/deno

export async function getModule(pkg: string): Promise<PKG> {
  let res = await (await fetch("https://api.npms.io/v2/package/" + pkg)).json();
  return res;
}

export interface PKG {
  analyzedAt: string;
  collected: Collected;
  evaluation: Evaluation;
  score: Score;
}

export interface Collected {
  metadata: Metadata;
  npm: Npm;
  github: Github;
  source: Source;
}

export interface Metadata {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  author: Author;
  publisher: Publisher;
  maintainers: Maintainer[];
  repository: Repository;
  links: Links;
  license: string;
  dependencies: Dependencies;
  releases: Release[];
  hasTestScript: boolean;
  readme: string;
}

export interface Author {
  name: string;
  email: string;
  url: string;
  username: string;
}

export interface Publisher {
  username: string;
  email: string;
}

export interface Maintainer {
  username: string;
  email: string;
}

export interface Repository {
  type: string;
  url: string;
}

export interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
  documentation: string;
}

export interface Dependencies {
  dafo: string;
  noda: string;
  qir: string;
}

export interface Release {
  from: string;
  to: string;
  count: number;
}

export interface Npm {
  downloads: Download[];
  starsCount: number;
}

export interface Download {
  from: string;
  to: string;
  count: number;
}

export interface Github {
  starsCount: number;
  forksCount: number;
  subscribersCount: number;
  issues: Issues;
  contributors: Contributor[];
  commits: Commit[];
}

export interface Issues {
  count: number;
  openCount: number;
  distribution: Distribution;
  isDisabled: boolean;
}

export interface Distribution {
  "3600": number;
  "10800": number;
  "32400": number;
  "97200": number;
  "291600": number;
  "874800": number;
  "2624400": number;
  "7873200": number;
  "23619600": number;
  "70858800": number;
  "212576400": number;
}

export interface Contributor {
  username: string;
  commitsCount: number;
}

export interface Commit {
  from: string;
  to: string;
  count: number;
}

export interface Source {
  files: Files;
  badges: Badge[];
  outdatedDependencies: OutdatedDependencies;
}

export interface Files {
  readmeSize: number;
  testsSize: number;
  hasNpmIgnore: boolean;
  hasChangelog: boolean;
}

export interface Badge {
  urls: Urls;
  info: Info;
}

export interface Urls {
  original: string;
  shields: string;
  content: string;
}

export interface Info {
  service: string;
  type: string;
  modifiers: Modifiers;
}

export interface Modifiers {
  type: string;
}

export interface OutdatedDependencies {
  qir: Qir;
  dafo: Dafo;
}

export interface Qir {
  required: string;
  stable: string;
  latest: string;
}

export interface Dafo {
  required: string;
  stable: string;
  latest: string;
}

export interface Evaluation {
  quality: Quality;
  popularity: Popularity;
  maintenance: Maintenance;
}

export interface Quality {
  carefulness: number;
  tests: number;
  health: number;
  branding: number;
}

export interface Popularity {
  communityInterest: number;
  downloadsCount: number;
  downloadsAcceleration: number;
  dependentsCount: number;
}

export interface Maintenance {
  releasesFrequency: number;
  commitsFrequency: number;
  openIssues: number;
  issuesDistribution: number;
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
