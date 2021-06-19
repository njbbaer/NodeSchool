const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  url = new URL(request.url, 'http://example.com');
  date = new Date(url.searchParams.get('iso'));
  if (url.pathname === '/api/parsetime') {
    body = { 
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }
  } else if (url.pathname === '/api/unixtime') {
    body = { 'unixtime': date.getTime() }
  }
  response.write(JSON.stringify(body));
  response.end();
});

server.listen(process.argv[2]);
