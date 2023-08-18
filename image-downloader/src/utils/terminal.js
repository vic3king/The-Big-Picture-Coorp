import yargs from 'yargs';
import chalk from 'chalk';
import boxen from 'boxen';

const terminal = () => {
    const usage = chalk.keyword('violet')(
        `\nUsage: image-downloader -f <file to read urls from> -d <destination to save downloaded images>\n` +
            boxen(chalk.green('\nDownloads images from urls\n'), {
                padding: 1,
                borderColor: 'green',
                dimBorder: true,
            }) +
            '\n',
    );

    return yargs
        .usage(usage)
        .option('f', {
            alias: 'file',
            describe: 'txt file for reading urls',
            type: 'string',
            demandOption: true,
        })
        .option('d', {
            alias: 'destination',
            describe: 'Destination folder for saving images',
            type: 'string',
            demandOption: true,
        })
        .help(true).argv;
};

export default terminal;
