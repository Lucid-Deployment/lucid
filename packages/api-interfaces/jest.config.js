const preset = require("../jest.preset");

module.exports = {
  ...preset,
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tests/tsconfig.json",
    },
  },
};
