#! /usr/bin/env node
const yargs = require("yargs");
const fetch = require("node-fetch");
console.log("Hello World!");

const usage = "\nUsage: tran <lang_name> sentence to be translated";const options = yargs  
      .usage(usage)  
      .option("l", {alias:"languages", describe: "List all supported languages.", type: "boolean", demandOption
: false })                                                                                                    
      .help(true)  
      .argv;

// var sentence = utils.parseSentence(yargs.argv._);

const fetchData = async() => {
    // import('node-fetch').then( async({default: fetch}) => {
    //     body = await response.text()
    // })
    const response = await fetch('https://tepra.kaltimprov.go.id/api/public/list-pilihan');
    const body = await response.text();
    console.log(body);
}

fetchData();
console.log('done')