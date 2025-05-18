const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", 
  testMatch: ["**/tests/**/*.test.ts", "**/tests/**/*.spec.ts"],
  transform: {
    ...tsJestTransformCfg,
  },
};
