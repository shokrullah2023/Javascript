const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// fs.readdir('.', (err, filename) => {
//   if(err){
//         console.log(err)
//     }

//     console.log(filename);
// })

const allStats = Array(filename.length).fill(null);  

fs.readdir(process.cwd(), (err, filenames) => {
  if(err){
        console.log(err)
    }

    //1- 

    // for (let filename of filenames) {
    //   const index = filenames.indexOf(filename);

    //   fs.lstat(filename, (err, stats) => {

    //     if (err) {
    //       console.log(err)
    //     }
    //     // console.log(filename, stats.isFile());
    //     allStats[index] = stats;

    //     const ready = allStats.every(stats => {
    //       return stats;
    //     })

    //     if (ready) {
    //       allStats.forEach((stats, index) => {
    //         console.log(filenames[index], stats.isFile());
    //       })
    //     }


    //   })
    // }

    //2- 

    // const lstat = filename => {
    //   return new Promise((resolve, rejects) => {
    //     fs.lstat(filename, (err, stats) => {
    //       if(err){
    //         rejects(err);
    //       }
    //       resolve(stats);
    //     })
    //   })
    // }

    //#3 -
    // const util = require("util");
    // const lstat = util.promisify(fs.lstat);


})


