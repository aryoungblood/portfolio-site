import fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'front-matter';

const WORK_DIR = 'content/work';

const work = fs.readdirSync(WORK_DIR).filter((file) => file[0] !== '.' && path.extname(file) === '.md').map((file) => {
  const markdown = fs.readFileSync(`${WORK_DIR}/${file}`, 'utf-8');
  const { body, attributes } = matter(markdown);
  const html = marked(body);

  return {
    title: attributes.title,
    year: attributes.date.split('-')[0],
    date: new Date(attributes.date),
    link: attributes.link,
    image: attributes.image,
    image_description: attributes.image_description,
    contributions: attributes.contributions,
    tools: attributes.tools,
    html: html.replace(/^\t{3}/gm, '')
  };
});

work.sort((a, b) => b.date - a.date);

export default work;
