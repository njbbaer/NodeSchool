const http = require('http');

const server = http.createServer((request, response) => {
  request.on('data', (chunk) => {
    response.write(chunk.toString().toUpperCase());
  });
});
server.listen(process.argv[2]);
