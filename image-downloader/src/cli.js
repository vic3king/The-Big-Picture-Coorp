#! /usr/bin/env node

import fs from 'fs';
import chalk from 'chalk';
import imageQueue from './config/bull';
import { validateUrls } from './utils';
import terminal from './utils/terminal';

imageQueue.process(__dirname + '/config/process.js');

imageQueue.on('completed', function (job, result) {
    process.exit(0);
});

const main = async () => {
    const args = terminal();

    const inputFilePath = args.f;
    const outputFolderPath = args.d;

    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
    }

    let urls = fs.readFileSync(inputFilePath, 'utf-8');

    const arrayOfUrls = urls.split(/\s+/);

    urls = validateUrls(arrayOfUrls);

    for (const url of urls) {
        imageQueue.add(
            { url, outputFolderPath },
            {
                attempts: 2,
            },
        );
    }

    console.log(chalk.green('\nURL(s) added to queue successfully\n'));
};

export default main;
