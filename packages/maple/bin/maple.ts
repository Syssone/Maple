#!/usr/bin/env node

import _ = require('lodash');
import resolveCwd = require('resolve-cwd');
import { Command } from 'commander';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

const program = new Command();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require('../package.json');

const checkCwdIsmapleApp = (name: any) => {
  const logErrorAndExit = () => {
    console.log(
      `You need to run ${chalk.yellow(
        `maple ${name}`
      )} in a maple project. Make sure you are in the right directory.`
    );
    process.exit(1);
  };

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pkgJSON = require(`${process.cwd()}/package.json`);
    if (!_.has(pkgJSON, 'dependencies.@maple/maple')) {
      logErrorAndExit();
    }
  } catch (err) {
    logErrorAndExit();
  }
};

const getLocalScript =
  (name: any) =>
  (...args: any) => {
    checkCwdIsmapleApp(name);

    const cmdPath = resolveCwd.silent(`@maple/maple/src/lib/commands/${name}`);
    if (!cmdPath) {
      console.log(
        `Error loading the local ${chalk.yellow(
          name
        )} command. maple might not be installed in your "node_modules". You may need to run "yarn install".`
      );
      process.exit(1);
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const script = require(cmdPath);

    Promise.resolve()
      .then(() => {
        return script(...args);
      })
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  };

// Initial program setup
program.storeOptionsAsProperties(false).allowUnknownOption(true);

program.helpOption('-h, --help', 'Display help for command');
program.addHelpCommand('help [command]', 'Display help for command');

// `$ maple version` (--version synonym)
program.version(
  packageJSON.version,
  '-v, --version',
  'Output the version number'
);
program
  .command('version')
  .description('Output the version of Maple')
  .action(() => {
    process.stdout.write(
      `Maple version: ${chalk.yellow(packageJSON.version)}\n`
    );
    process.exit(0);
  });

program
  .command('start')
  .description('Start your Maple application')
  .action(getLocalScript('start'));

program.parseAsync(process.argv);
