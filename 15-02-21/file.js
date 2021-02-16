const directory = './Uplay/';
const path = require('path');
const fs = require('fs');

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
      console.log('Directory: ' + file);
    } else {
      console.log('File: ' + file);
    }
  });
});