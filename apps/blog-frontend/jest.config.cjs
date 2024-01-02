// const nextJest = require('next/jest');

// const createJestConfig = nextJest({
//   dir: './',
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
//   moduleNameMapper: {
//     '^@/components/(.*)$': '<rootDir>/components/$1',
//     '^@/pages/(.*)$': '<rootDir>/pages/$1',
//   },
//   testEnvironment: 'jest-environment-jsdom',
// };

// module.exports = createJestConfig(customJestConfig);

export default {
  displayName: 'blog-frontend',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/blog-frontend',
};