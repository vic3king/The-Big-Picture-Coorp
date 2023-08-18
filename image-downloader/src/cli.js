#! /usr/bin/env node

const fs = require('fs');
const imageQueue = require('./config/bull');
const { validateUrls } = require('./utils');
const terminal = require('./utils/terminal');

imageQueue.process(__dirname + '/config/process.js');

imageQueue.on('completed', function(job, result){
    process.exit(0);
})

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

    console.log('URL(s) added to queue successfully');
};

module.exports = main;
