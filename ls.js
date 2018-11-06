const fs = require('fs');
const list = () => {
  fs.readdirSync('./', 'utf8', (err, files) => {
    console.log('hello');
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('\nprompt >');
    }
  });
};

const returned = list();
module.exports = returned;
