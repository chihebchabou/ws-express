const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        try {
          if (err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        } catch (err) {
          console.log('error: ', err.message);
          res.writeHead(500);
          res.end('Server Error');
        }
      }
    );
  }

  if (req.url === '/about') {
    fs.readFile(
      path.join(__dirname, 'public', 'about.html'),
      (err, content) => {
        try {
          if (err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        } catch (err) {
          console.log('error: ', err.message);
          res.writeHead(500);
          res.end('Server Error');
        }
      }
    );
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
