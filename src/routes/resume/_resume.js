import fs from 'fs';
import marked from 'marked';
import matter from 'gray-matter';

const markdown = fs.readFileSync('content/resume/resume.md', 'utf-8');
const { content } = matter(markdown);
const html = marked(content);

const resume = html.replace(/^\t{3}/gm, '');

export default resume;
