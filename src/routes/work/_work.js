import fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';

const WORK_DIR = 'content/work';

const work = fs.readdirSync(WORK_DIR).filter((file) => file[0] !== '.' && path.extname(file) === '.md').map((file) => {
  const markdown = fs.readFileSync(`${WORK_DIR}/${file}`, 'utf-8');
  const { content, data } = matter(markdown);
  const html = marked(content);

  return {
    title: data.title,
    year: data.date.split('-')[0],
    date: new Date(data.date),
    link: data.link,
    image: data.image,
    image_description: data.image_description,
    contributions: data.contributions,
    tools: data.tools,
    html: html.replace(/^\t{3}/gm, '')
  };
});

work.sort((a, b) => b.date - a.date);

export default work;
