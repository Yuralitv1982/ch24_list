#!/usr/bin/env node
const fs = require('fs');
// const process = require('process');

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

   // bad code here
   for (let filename of filenames) {
      fs.lstat(filename, (err, stats) => {
         if (err) {
            console.log(err);
         }
         console.log(filename, stats.isFile());
      });
   }
});
