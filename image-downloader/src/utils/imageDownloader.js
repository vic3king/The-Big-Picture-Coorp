import axios from 'axios';
import chalk from 'chalk';
import fs from 'fs';

import { generateImagePath } from './index.js';

const imageDownloader = async (url, destinationFolder) => {
    try {
        console.log(chalk.green(`Downloading: ${url}`));

        const response = await axios.get(url, { responseType: 'arraybuffer' });

        const imagePath = generateImagePath(url, destinationFolder);

        fs.writeFileSync(imagePath, response.data);

        console.log(chalk.white(`Downloaded: ${url}`));
    } catch (error) {
        console.log(chalk.red(`Error downloading: ${url}`), error);
    }
};

export default imageDownloader;
