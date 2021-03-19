const mymodule = require('./mymodule');

const [, , path, extension] = process.argv;

mymodule(path, extension, (err, data) => {
  data.forEach((file) => {
    console.log(file);
  });
});
