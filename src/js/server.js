const app = require('koa')();
const router = require('koa-router')();
const bodyParser = require('koa-body-parser');
// const http = require('http');
const Promise = require('bluebird');
const Datastore = require('nedb');
// const path = require('path');

// const dirname = (pathname) => path.resolve(__dirname, pathname);

const db = {
  teams: Promise.promisifyAll(new Datastore({ filename: '../data/teams.db', autoload: true }))
};

app.use(bodyParser());


app.use(function *(next) {
  let start = new Date;
  let ms = new Date - start;
  // this.set('Access-Control-Allow-Credentials', true);
  this.set('Access-Control-Allow-Origin', this.headers.origin);
  this.set('X-Response-Time', `${ms}ms`);
  yield next;
});

function getCommand() {
  return db.teams.findAsync({});
  // return Promise.resolve()
  //   .then( () => {
  //     return db.teams.findAsync({})
  //   });
}

// getCommand().then((commands) => console.log(commands));

function addCommand(data) {
  return db.teams.insertAsync(data);
  // console.log(data);
  // return Promise.resolve()
  //   .then( () => {
  //     return db.teams.insertAsync(data);
  //   });
}

router.post('/commands', function *(next) {
  const command = yield addCommand(JSON.parse(decodeURIComponent(this.request.body)));
  this.body = {
    command
  }
  yield next;
});


router.get('/commands', function *(next) {
  const commands = yield getCommand();
  this.body = commands;
  yield next;
});
// app.use(function *() {
//   this.body = 'Hello!';
// });

app.use(router.routes());
app.listen(3000);

// http.createServer(app.callback()).listen(3000);
// Promise.all([
//   Promise.promisify(db.teams.loadDatabase.bind(db.teams))(),
//   Promise.promisify(db.games.loadDatabase.bind(db.games))()
// ])
// .then(() => {
//   app.listen(3000);
// });
//
// function promisify(func) {
//   return function(args) {
//     return new Promise((resolve, reject) => {
//       func(args, (err, a, b, s) => {
//         if (err) { return reject(err); }
//         return resolve([a, b, s]);
//       })
//     })
//
//   }
//
// }

// db.teams.loadDatabase(() => {
//   app.listen(3000);
// });
