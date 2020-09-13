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
    // JavaScript date object is unreliable as string date parser due to browser inconsistencies, so parse date manually.
    const [year, month, day] = attributes.date.split('-');

    function getMonthName(month) {
      let monthName = '';

      switch (month) {
        case '01':
          monthName = 'January';
          break;
        case '02':
          monthName = 'February';
          break;
        case '03':
          monthName = 'March';
          break;
        case '04':
          monthName = 'April';
          break;
        case '05':
          monthName = 'May';
          break;
        case '06':
          monthName = 'June';
          break;
        case '07':
          monthName = 'July';
          break;
        case '08':
          monthName = 'August';
          break;
        case '09':
          monthName = 'September';
          break;
        case '10':
          monthName = 'October';
          break;
        case '11':
          monthName = 'November';
          break;
        case '12':
          monthName = 'December';
          break;
        default:
          break;
      }

      return monthName;
    }

    return {
      title: attributes.title,
      presentationDate: `${getMonthName(month)} ${day}, ${year}`,
      date: new Date(attributes.date),
      slug: path.basename(file, '.md'),
      summary: attributes.summary,
      html: html.replace(/^\t{3}/gm, '')
    };
  });

posts.sort((a, b) => b.date - a.date);

export default posts;
