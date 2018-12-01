<?php

include "./vendor/autoload.php";

use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version2X;

$verison = new Version2X('http://localhost:3000');

$client= new Client($verison);

$client->initialize();
$client->emit('new_order',["test"=>"test","test1"=>"test1"]);

$client->close();

?>