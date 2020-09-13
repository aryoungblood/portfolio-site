import fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'front-matter';

const BLOG_DIR = 'content/blog';

const posts = fs.readdirSync(BLOG_DIR)
  .filter((file) => file[0] !== '.' && path.extname(file) === '.md')
  .map((file) => {
    const markdown = fs.readFileSync(`${BLOG_DIR}/${file}`, 'utf-8');
    const {body, attributes} = matter(markdown);
    const html = marked(body);
    const date = new Date(attributes.date);

    function getMonthName(month) {
      let monthName = '';

      switch (month) {
        case 1:
          monthName = 'January';
          break;
        case 2:
          monthName = 'February';
          break;
        case 3:
          monthName = 'March';
          break;
        case 4:
          monthName = 'April';
          break;
        case 5:
          monthName = 'May';
          break;
        case 6:
          monthName = 'June';
          break;
        case 7:
          monthName = 'July';
          break;
        case 8:
          monthName = 'August';
          break;
        case 9:
          monthName = 'September';
          break;
        case 10:
          monthName = 'October';
          break;
        case 11:
          monthName = 'November';
          break;
        case 12:
          monthName = 'December';
          break;
        default:
          break;
      }

      return monthName;
    }

    return {
      title: attributes.title,
      presentationDate: `${getMonthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`,
      date: date,
      slug: path.basename(file, '.md'),
      topics: attributes.topics,
      summary: attributes.summary,
      html: html.replace(/^\t{3}/gm, '')
    };
  });

posts.sort((a, b) => b.date - a.date);

export default posts;
