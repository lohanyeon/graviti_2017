npm install --save express
npm install --save realm
npm install --save ejs
npm install --save body-parser
npm install --save-dev nodemon


package.json script부분 수정
{
  ...
  "scripts": {
    "serve": "nodemon index.js"
  },
  ...
}

npm run serve
