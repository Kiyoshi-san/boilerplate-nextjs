module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["app/**/*.ts(x)?", "!app/**/(*.)?stories.tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
