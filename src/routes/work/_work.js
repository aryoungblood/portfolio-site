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
    year: data.year,
    link: data.link,
    image: data.image,
    contributions: data.contributions,
    tools: data.tools,
    html: html.replace(/^\t{3}/gm, '')
  };
});

export default work;
