module.exports = {
  preset: "ts-jest",
  transform: { "^.+\\.ts?$": "ts-jest" },
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
