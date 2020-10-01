/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
const fs = require('fs');
const { ENOENT } = require('constants');

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE

  // build path:
  let filePath = path.join(
    __dirname,
    req.url === '/' ? './index.html' : req.url
  );
  // extention of the filw:
  let extname = path.extname(filePath);

  // initial content type:
  let contentType = 'text/html';

  // check ext and set content type:
  switch (extname) {
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.html':
      contentType = 'text/html';
      break;
    case '.css':
      contentType = 'text/stylesheet';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (status == 'ENOENT') {
        fs.readFile('.404.html', (error, contents) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(contents, 'utf8');
        });
      } else {
        res.writeHead(500);
        res.end(`server Error :${err.code}`);
      }
    } else {
      // succsess

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});
server.listen(3000); // The server starts to listen on port 3000
