const Queue = require('bull');

jest.mock('bull', () => jest.fn());

const imageQueue = require('../src/config/bull');

describe('imageQueue Module', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should export the imageQueue instance', () => {
        expect(imageQueue).toBeInstanceOf(Queue);
    });
});
