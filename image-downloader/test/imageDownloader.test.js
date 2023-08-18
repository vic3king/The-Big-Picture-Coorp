const axios = require('axios');
const fs = require('fs');
const path = require('path');
const imageDownloader = require('../src/utils/imageDownloader');
const { hasQueryParam } = require('../src/utils');

jest.mock('axios');

describe('imageDownloader Module', () => {
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
        expect(axios.get).toHaveBeenCalledWith(mockUrl, { responseType: 'arraybuffer' });

        expect(writeFileSyncMock).toHaveBeenCalledTimes(1);
        expect(writeFileSyncMock).toHaveBeenCalledWith(
            path.join(mockDestinationFolder, 'image.jpg'),
            'mock image data',
        );
    });

    it('should handle error during download', async () => {
        const mockUrl = 'https://example.com/image.jpg';
        const mockError = new Error('Network error');

        axios.get.mockRejectedValue(mockError);

        await imageDownloader(mockUrl, '/mock/folder');

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(mockUrl, { responseType: 'arraybuffer' });
    });
});
