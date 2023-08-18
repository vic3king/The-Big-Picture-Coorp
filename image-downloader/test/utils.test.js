import { hasQueryParam, validateUrls, generateImagePath } from '../src/utils';

describe('hasQueryParam', () => {
    it('should return true for URLs with query parameters', () => {
        const url = 'https://example.com/image.jpg?param=value';
        const result = hasQueryParam(url);
        expect(result).toBe(true);
    });

    it('should return false for URLs without query parameters', () => {
        const url = 'https://example.com/image.jpg';
        const result = hasQueryParam(url);
        expect(result).toBe(false);
    });
});

describe('validateUrls', () => {
    it('should return an empty array for empty input', () => {
        const urls = [];
        const result = validateUrls(urls);
        expect(result).toEqual([]);
    });

    it('should return an array of valid URLs', () => {
        const urls = [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
            'invalid-url',
        ];

        const result = validateUrls(urls);
        expect(result).toEqual([
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
        ]);
    });

    it('should return an empty array for all invalid URLs', () => {
        const urls = ['invalid1', 'invalid2'];
        const result = validateUrls(urls);
        expect(result).toEqual([]);
    });
});

describe('generateImagePath', () => {
    it('should generate a new image name without query parameters', () => {
        const url = 'https://example.com/image.jpg';
        const destinationFolder = '/path/to/destination';

        const result = generateImagePath(url, destinationFolder);

        expect(result.includes('/path/to/destination')).toBe(true);
    });
});
