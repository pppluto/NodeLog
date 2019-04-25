/**
 * simple server
 */
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

// app.get('/', (req, res) => {
//   res.end('hello');
// });

// app.get('/home', (req, res) => {
//   res.end('Hello World!');
// });

/**
 * static web
 */
// app.use(express.static(process.argv[3]));

/**
 * template like pug
 */
// app.set('views', path.join(__dirname, 'pug'));
// app.set('view engine', 'pug');
// app.get('/home', (req, res) => {
//   res.render('index', { date: new Date().toDateString() });
// });
// app.get('/', (req, res) => {
//   res.render('home');
// });

/**
 * tranditional form
 * https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
 */

// app.use(bodyParser.urlencoded({ extended: false }));
// app.post('/form', (req, res) => {
//   let s = req.body.str
//     .split('')
//     .reverse()
//     .join('');
//   res.send(s);
// });

/**
 * query
 */
var crypto = require('crypto');

//use middleware
// app.param('id', function(req, res, next, id) {
//   req.id = id;
//   next();
// });

// app.put('/message/:id', (req, res) => {
//   let id = req.params.id; //middlewar  req.id;
//   let cid = crypto
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex');
//   res.end(cid);
// });

// /**
//  * get query
//  */
// app.get('/search', (req, res) => {
//   let query = req.query;
//   res.end(JSON.stringify(query));
// });

/**
 * read file
 */

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) return res.sendStatus(500);
    try {
      books = JSON.parse(data);
    } catch (error) {
      res.sendStatus(500);
    }
    res.json(books);
  });
});
app.listen(process.argv[2]);
