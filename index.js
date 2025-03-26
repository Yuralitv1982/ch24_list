#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
// const process = require('process');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
   //either
   // err === an error object, which means something went wrong
   // or
   // err === nul, which means everything is OK

   if (err) {
      // error handling code here
      console.log(err);
      // return new Error(err)
   }

   for (let filename of filenames) {
      try {
         const stats = await lstat(filename);

         console.log(filename, stats.isFile());
      } catch (err) {
         console.log(err);
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
