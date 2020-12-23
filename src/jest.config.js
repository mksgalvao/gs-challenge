module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/*.spec.(ts)"],
  testEnvironment: "node",
  reporters: ["default", "jest-junit"],
  watchPathIgnorePatterns: ["pact/logs/*", "pact/pacts/*"],
};
