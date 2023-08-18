const fs = require('fs');
const cli = require('../src/cli');
const imageQueue = require('../src/config/bull');
const terminal = require('../src/utils/terminal');

const mockData =
    'https://fastly.picsum.photos/id/655/200/200.jpg?hmac=skyBShySCLoGXt4Gy91C5mmi2yQeWaqtypiJFwTKM4M "not-a-url" "https://invalid", 1';

jest.mock('fs');

jest.mock('../src/config/bull.js', () => ({
    process: jest.fn(),
    add: jest.fn(),
}));

jest.mock('../src/utils/terminal', () =>
    jest.fn(() => ({
        f: 'input.txt',
        d: 'output_folder',
    })),
);

beforeAll(() => {
    fs.existsSync.mockReturnValue(false);
    fs.mkdirSync.mockReturnValue(true);

    fs.readFileSync.mockReturnValue(
        'https://fastly.picsum.photos/id/655/200/200.jpg?hmac=skyBShySCLoGXt4Gy91C5mmi2yQeWaqtypiJFwTKM4M "not-a-url" "https://invalid", 1',
    );
});

afterAll(() => {
    jest.clearAllMocks();
});

describe('CLI Script', () => {
    it('should add URLs to the queue and create output folder', async () => {
        cli();

        expect(fs.existsSync).toHaveBeenCalledTimes(1);
        expect(fs.existsSync).toHaveBeenCalledWith('output_folder');
        expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
        expect(fs.mkdirSync).toHaveBeenCalledWith('output_folder', { recursive: true });
        expect(fs.readFileSync).toHaveBeenCalledTimes(1);
        expect(fs.readFileSync).toHaveBeenCalledWith('input.txt', 'utf-8');
        expect(imageQueue.add).toHaveBeenCalledTimes(1);
    });
});
