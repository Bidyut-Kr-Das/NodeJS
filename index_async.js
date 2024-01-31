const fs = require('fs');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
        // throw new Error('this is rejected');
      }
      //   console.log(data);
      resolve(data);
    });
  });
};
(async () => {
  const text = await readFilePromise(`${__dirname}/txt/dog.txt`);
  console.log(text);
})();
