
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
var fs = require('fs');

// synchronous way of creating & removing directories
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// Asynchronous way of creating&removing directories














