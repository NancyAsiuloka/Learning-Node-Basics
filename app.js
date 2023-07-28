
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World!');
//         res.end();
//     }
//     if (req.url === '/api/courses'){
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('Listening on port 3000...');

// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed...');
//     if(time > 5){
//         clearInterval(timer);
//     }
// }, 2000);
// console.log(__dirname);
// console.log(__filename);


// function callFunction(fun){
//     fun();
// }

// function expression

// var sayBye = function(){
//     console.log('bye');
// };

// callFunction(sayBye);

// Module.
// var logger = require ('./logger');

// console.log(logger.counter(['nancy', 'doris', 'gideon']));
// console.log(logger.adder(5, 8));
// console.log(logger.adder(logger.pi, 5));


// var events = require ('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', (mssg) => {
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

// var events = require ('events');
// var util = require('util');

// var Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var nancy = new Person('nancy');
// var doris = new Person('doris');
// var people = [james, nancy, doris];

// people.forEach(function (person){
//     person.on('speak', function(mssg){
//         console.log(person.name + ' said: ' + mssg);
//     });
// });

// james.emit('speak', 'hey dudes');
// nancy.emit('speak', 'I want a curry!');


// READING & WRITING FILES ON THE COMPUTER

// var fs = require('fs');

// Synchronous method for reading & writing files
// var readMe = fs.readFileSync('readMee.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

// Asynchronous method for writing & reading files
// var fs = require('fs');

// fs.readFile('readMee.txt', 'utf8', function(err, data){
//     fs.writeFile('writeMe.txt', data);
// });

// CREATING &REMOVING DIRECTORIES oR FOLDER
// var fs = require('fs');

// synchronous way of creating & removing directories
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// Asynchronous way of creating&removing directories

// New way to create a new file 1
// const fs = require('fs');
// const { promisify } = require('util');

// const mkdirPromise = promisify(fs.mkdir);
// const readFilePromise = promisify(fs.readFile);
// const writeFilePromise = promisify(fs.writeFile);

// (async function () {
//   try {
//     await mkdirPromise('stuff');
//     const data = await readFilePromise('readMe.txt', 'utf8');
//     await writeFilePromise('./stuff/writeMe.txt', data);
//     console.log('File successfully created and data written.');
//   } catch (err) {
//     console.error('Error:', err);
//   }
// })();


// Old way of doing things
//  function createdFile(){
//     fs.mkdir('stuff', async function () {
//         await fs.readFile('readMe.txt', 'utf8', async function (_, data) {
//             await fs.writeFile('./stuff/writeMe.txt', data);
//       });
//     });
//  }



// removing directories asynchronously
// New way to remove directories
// const fs = require('fs');
// const { promisify } = require('util');

// const unlinkPromise = promisify(fs.unlink);
// const rmdirPromise = promisify(fs.rmdir);

// (async function () {
//     try {
//       // Remove the 'writeMe.txt' file
//       await unlinkPromise('./stuff/writeMe.txt');
//       console.log('writeMe.txt removed.');

//       // Remove the 'stuff' directory
//       await rmdirPromise('stuff');
//       console.log('stuff directory removed.');
//     } catch (err) {
//       console.error('Error:', err);
//     }
//   })();


//   Old way of removing directories asynchronously
// const fs = require('fs');

// fs.unlink('./stuff/writeMe.txt', function(){
//     fs.rmdir('stuff');
// })

// CLIENTS & SERVERS
// Creating a Server
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Ninjas');
});


























