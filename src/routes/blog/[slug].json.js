import posts from './_posts.js';

let lookup;

export async function get(req, res, next) {
  lookup = new Map();

  posts.forEach(post => {
    lookup.set(post.slug, post);
  });

  const post = lookup.get(req.params.slug);

  if (post) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(post));
  } else {
    next();
  }
}
