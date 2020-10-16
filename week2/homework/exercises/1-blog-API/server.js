const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// YOUR CODE GOES IN HERE
app.use(express.json());

function isInvalid(req) {
  if (
    typeof req.body.title == 'undefined' ||
    typeof req.body.content == 'undefined'
  ) {
    return true;
  } else {
    return false;
  }
}

// creating a blog
app.post('/blogs', (req, res) => {
  // How to get the title and content from the request??
  creatBlog(req, res);
});

// updating a blog:
app.put('/posts/:title', (req, res) => {
  updateBlog(req, res);
});
// deleting a blog:
app.delete('/blogs/:title', (req, res) => {
  deleteBlog(req, res);
});
// reading a blog:

app.get('/blogs/:title', (req, res) => {
  readBlog(req, res);
});

// read all posts"
app.get('/blogs', (req, res) => {
  //   // how to get the file names of all files in a folder??
  res.body = [];
  fs.readdir('./posts', (err, files) => {
    files.forEach((file) => {
      res.body.push({ title: file });
    });
    res.send(res.body);
  });
});

function creatBlog(req, res) {
  if (isInvalid(req)) {
    res.status(400);
    res.send('invalid request');
    return;
  }
  let title = req.body.title;
  let content = req.body.content;
  fs.writeFileSync(path.join(__dirname, './posts', title), content);
  res.end('ok');
}

function updateBlog(req, res) {
  // How to get the title and content from the request?
  let title = req.params.title;
  let content = req.body.content;
  // What if the request does not have a title and/or content?
  if (isInvalid(req)) {
    res.status(400);
    res.send('invalid request');
    return;
  }

  if (fs.existsSync(path.join(__dirname, './posts', title))) {
    fs.writeFileSync(path.join(__dirname, './posts', title), content);
    res.end('ok');
  } else {
    // Send response with error message
    res.status(404);
    res.send('This post does not exist!');
    return;
  }
}
function deleteBlog(req, res) {
  // How to get the title from the url parameters?
  let title = req.params.title;

  // Add condition here
  if (fs.existsSync(path.join(__dirname, './posts', title))) {
    fs.unlinkSync(path.join(__dirname, './posts', title));
    res.end('ok');
  } else {
    // Respond with message here
    res.status(404);
    res.send('This post does not exist!');
    return;
  }
}

function readBlog(req, res) {
  // How to get the title from the url parameters?
  let title = req.params.title;
  // check if post exists
  if (fs.existsSync(path.join(__dirname, './posts', title))) {
    const post = fs.readFileSync(path.join(__dirname, './posts', title));
    // send response}
    res.end(post);
  } else {
    res.status(404);
    res.send('This post does not exist!');
    return;
  }
}

app.listen(3000);
