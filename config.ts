import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.mql4.com/",
  match: "https://docs.mql4.com/**",
  maxPagesToCrawl: 28,
  outputFileName: "MQL4coding.json",
  maxTokens: 2000000,
};
