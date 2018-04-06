module.exports = {
  collectCoverageFrom: [
    '{containers,contents,components,pages,utils}/**/*.{js,md}'
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/out'
  ],
  testMatch: [
    '<rootDir>/tests/**/*.test.js'
  ],
  transform: {
    '\\.(md|css)$': '<rootDir>/tests/raw-loader-transform.js',
    '.*': 'babel-jest'
  }
}
