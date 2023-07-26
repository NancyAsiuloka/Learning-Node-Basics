
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


var events = require ('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (mssg) => {
    console.log(mssg);
});

myEmitter.emit('someEvent')










