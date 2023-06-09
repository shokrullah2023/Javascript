#!/usr/bin/env node

// Set up project for node

// 1- attrib +x index.js 
// 2- npm init -y
// 3- npm link 

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');
const fs = require('fs');
const {spawn} = require('child_process');

program
    .version('0.0.1')
    .argument('[filename]', 'Name of file to execute')
    .action( async ({ filename }) => {
        const name = filename || index.js;
        try{
            await fs.promises.access(name);
        }
       catch(err){
        throw new Error(`Could not find the file ${name}`);
       }

        const start = debounce(() => {
            spawn('node', [name], {stdio: 'inherit'});
        }, 100);
        
        chokidar 
            .watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start)
        
    })

    program.parse(process.argv);




