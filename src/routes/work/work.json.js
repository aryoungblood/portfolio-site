import work from './_work.js';

const contents = JSON.stringify(work.map((entry) => entry));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
