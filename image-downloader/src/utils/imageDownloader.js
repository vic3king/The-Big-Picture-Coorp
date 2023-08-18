const axios = require('axios');
const fs = require('fs');
const path = require('path');

const { hasQueryParam } = require('./index');

const imageDownloader = async (url, destinationFolder) => {
    try {
        console.log(`Downloading: ${url}`);

        const response = await axios.get(url, { responseType: 'arraybuffer' });

        let imageFileName = path.basename(url);

        if (hasQueryParam(imageFileName)) {
            imageFileName = imageFileName.split('?')[0];
        }

        const imagePath = path.join(destinationFolder, imageFileName);

        fs.writeFileSync(imagePath, response.data);

        console.log(`Downloaded: ${url}`);
    } catch (error) {
        console.log(`Error downloading: ${error}`);
    }
};

module.exports = imageDownloader;
