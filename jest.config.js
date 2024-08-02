/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts|tsx|js|jsx"],
  coveragePathIgnorePatterns: [
    "node_modules",
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    },
    'src/stats.ts': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    },
    'src/testLib.ts': {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    },
  },
  coverageDirectory: "./coverage",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};