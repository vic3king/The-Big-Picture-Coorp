import chalk from 'chalk';
import imageDownloader from '../utils/imageDownloader';

const process = async function (job) {
    try {
        const { data } = job;

        await imageDownloader(data.url, data.outputFolderPath);
    } catch (error) {
        console.log(chalk.red('Error processing job:'), error);
    }
};

export default process;
