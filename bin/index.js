#! /usr/bin/env node
const yargs = require("yargs");
const utils = require('./utils.js')
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const usage = "\nUsage: tc <lang_name> sentence to be translated";
yargs
.usage(usage)
// .option("l", {alias:"languages", describe: "List all supported languages.", type: "boolean", demandOption: false })
.help(true)
.argv;

// if (yargs.argv.s) {
//       process.stdout.write(yargs.argv.fr ? 'Le perroquet dit: ' : 'The parrot says: ');
//   }
//   console.log(
//       (yargs.argv.fr ? 'couac' : 'squawk') + (yargs.argv.p ? '!' : '')
//   );
console.log(argv._)

console.log("Hello World!");

// var sentence = utils.parseSentence(yargs.argv._);
// utils.fetchData('https://tepra.kaltimprov.go.id/api/public/list-pilihan');
// console.log('done')