module.exports = {
    verbose: true,
    testEnvironment: 'node',
    silent: false,
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['**/*.ts', '!test/**/*.ts?(x)', '!**/node_modules/**'],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
};
