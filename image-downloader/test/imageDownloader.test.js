import fs from 'fs';
import axios from 'axios';
import imageDownloader from '../src/utils/imageDownloader';
import { generateImagePath } from '../src/utils';

jest.mock('axios');
jest.mock('fs');

describe('imageDownloader Module', () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should download and save the image', async () => {
        const mockUrl = 'https://example.com/image.jpg';
        const mockResponse = { data: 'mock image data' };
        const mockDestinationFolder = 'output_folder';

        axios.get.mockResolvedValue(mockResponse);

        const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

        await imageDownloader(mockUrl, mockDestinationFolder);

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(mockUrl, {
            responseType: 'arraybuffer',
        });

        const expectedImagePath = generateImagePath(
            mockUrl,
            mockDestinationFolder,
        );

        expect(writeFileSyncMock).toHaveBeenCalledTimes(1);
        expect(expectedImagePath.includes('output_folder')).toBe(true);
    });

    it('should handle error during download', async () => {
        const mockUrl = 'https://example.com/image.jpg';
        const mockError = new Error('Network error');

        axios.get.mockRejectedValue(mockError);

        await imageDownloader(mockUrl, '/mock/folder');

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(mockUrl, {
            responseType: 'arraybuffer',
        });
    });
});
