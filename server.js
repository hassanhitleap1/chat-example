var socket=require('socket.io');
var express=require('express');
var http=require('http');
 logger =require('winston');



logger.remove(logger.transports.Console);
logger.add(logger.transports.Console,{colorize:true,timestamp:true});

logger.info('socket is lessin in port ');

var app=express();
var http_server=http.createServer(app).listen(3001);

function emmitOrder(http_server){
    var io=socket.listen(http_server);
    io.sockets.on('connection',function(socket){
        console.log('connection');
        
    });
}
emmitOrder(http_server);