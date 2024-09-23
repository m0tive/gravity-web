import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforms TypeScript and TSX files using ts-jest
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  roots: ['<rootDir>/src'], // Limit tests to the src directory
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Mock SCSS/CSS imports
  },
  //setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: Jest setup file
};

export default config;
