#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
// const process = require('process');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises.lstat;

fs.readdir(process.cwd(), (err, filenames) => {
   //either
   // err === an error object, which means something went wrong
   // or
   // err === nul, which means everything is OK

   if (err) {
      // error handling code here
      console.log(err);
      // return new Error(err)
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
