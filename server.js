var socket=require('socket.io');
    express=require('express');
    http=require('http');

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'debug',
    format: format.combine(format.colorize(), format.simple()),
    transports: [new transports.Console()]
});

logger.info('Hello world');
logger.debug('Debugging info');


var app=express();
var http_server=http.createServer(app).listen(3000);

function emmitOrder(http_server){
    var io=socket.listen(http_server);
    io.sockets.on('connection',function(socket){
        socket.on("new_order",function (data) {
            io.emit("new_order")
            console.log(data);
            
        })
        
    });
}
emmitOrder(http_server);

