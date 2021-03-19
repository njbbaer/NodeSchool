const fs = require('fs');

module.exports = (path, extension, callback) => {
  fs.readdir(path, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      const filtered = data.filter((file) => file.endsWith(`.${extension}`));
      callback(null, filtered);
    }
  });
};
