#!/usr/bin/env node


import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';
import ora from 'ora';

// Spinner setup
const spinner = ora({
    text: chalk.blue('Loading please wait cuties...'),
    spinner: 'hearts',
}).start();

setTimeout(() => {
    spinner.stop();

    // Header with flowers
    console.log(
        gradient.pastel(
            figlet.textSync('🌸 Prarthana 🌸', {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            })
        )
    );

    // Introduction box
    console.log(
        boxen(
            chalk.magentaBright(
                "Hi, I'm Prarthana! 🌸\n\nI'm passionate about:\n✨ Web Development\n✨ Art & Creativity\n✨ Exploring Tech"
            ),
            {
                padding: 1,
                margin: 1,
                borderStyle: 'double',
                borderColor: 'magenta',
                title: 'About Me',
                titleAlignment: 'center',
            }
        )
    );

    // Simulating a pony riding effect
    let pony = ['🐴', '🌸', '🌈', '💖', '🌟'];
    let ponyCount = 0;

    const ponyAnimation = setInterval(() => {
        process.stdout.write(`\r${chalk.cyan(pony[ponyCount % pony.length])} `);
        ponyCount++;
    }, 500); // Bouncing effect with a new pony emoji

    setTimeout(() => {
        clearInterval(ponyAnimation);
        process.stdout.write('\n\n');
    }, 3000); // Stop the animation after 3 seconds

    // Social links
    console.log(chalk.cyanBright('🌐 Connect with me:\n'));
    console.log(
        chalk.yellowBright.bold('LinkedIn: ') +
            chalk.blueBright('www.linkedin.com/in/prarthana-gade-400040256')
    );

    console.log(chalk.greenBright.bold('GitHub: ') + chalk.blueBright('https://github.com/PrarthanaGade'));

    console.log('\n' + chalk.bold.magenta('💖 Thanks for visiting my CLI portfolio! 💖'));
}, 2000);
