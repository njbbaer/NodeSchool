const fs = require('fs');

const [, , path, extension] = process.argv;

fs.readdir(path, (err, list) => {
  list.forEach((file) => {
    if (file.endsWith(`.${extension}`)) {
      console.log(file);
    }
  });
});
