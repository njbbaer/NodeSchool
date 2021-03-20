const http = require('http');

let allData = '';
http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    allData += `${data}`;
  });
  response.on('end', () => {
    console.log(allData.length);
    console.log(allData);
  });
});
