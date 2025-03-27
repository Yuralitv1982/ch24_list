#!/usr/bin/env node
// const fs = require('fs.cjs');
import fs from 'fs';
// const util = require('util');
// import util from 'util';
import chalk from 'chalk';
import path from 'path';

// console.log(chalk.blue('Hello world!')); // test use chalk
// const process = require('process');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

// console.log(process.argv);
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
   //either
   // err === an error object, which means something went wrong
   // or
   // err === nul, which means everything is OK

   if (err) {
      // error handling code here
      console.log(err);
      // return new Error(err)
   }

   const statPromises = filenames.map((filename) => {
      return lstat(path.join(targetDir, filename));
   });

   const allStats = await Promise.all(statPromises);
   for (let stats of allStats) {
      const index = allStats.indexOf(stats);
      if (stats.isFile()) {
         console.log(filenames[index]);
      } else {
         console.log(chalk.yellow.bold(filenames[index]));
      }
   }
});

// Method #1

// const lstat = (filename) => {
//    return new Promise((resolve, reject) => {
//       fs.lstat(filename, (err, stats) => {
//          if (err) {
//             reject(err);
//          }

//          resolve(stats);
//       });
//    });
// };
