import resume from './_resume.js';

const contents = JSON.stringify(resume);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
