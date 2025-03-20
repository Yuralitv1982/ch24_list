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

   const allSats = Array(filenames.length).fill(null);

   for (let filename of filenames) {
      const index = filenames.indexOf(filename);
      fs.lstat(filename, (err, stats) => {
         if (err) {
            console.log(err);
         }
         allSats[index] = stats;

         const ready = allSats.every((stats) => {
            return stats;
         });

         if (ready) {
            allSats.forEach((stats, index) => {
               console.log(filenames[index], stats.isFile());
            });
         }
      });
   }
});
