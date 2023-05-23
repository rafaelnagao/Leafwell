const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Leafwell test running!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
