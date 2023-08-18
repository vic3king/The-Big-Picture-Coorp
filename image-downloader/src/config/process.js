const imageDownloader = require('../utils/imageDownloader');

module.exports = async function (job) {
    try {
        const { data } = job;
        await imageDownloader(data.url, data.outputFolderPath);
    } catch (error) {
        console.error('Error processing job:', error);
    }
};
