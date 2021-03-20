const http = require('http');

const requestInSequence = (urls, allData = '') => {
  http.get(urls.shift(), (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      // eslint-disable-next-line no-param-reassign
      allData += data;
    });
    response.on('end', () => {
      if (urls.length === 0) {
        console.log(allData);
      } else {
        requestInSequence(urls, `${allData}\n`);
      }
    });
  });
};

const urls = process.argv.slice(2);
requestInSequence(urls);
