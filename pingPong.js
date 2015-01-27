// se for 3 => Ping
// se for 5 => Pong
// senão o numero

function pingPong() {
    for (var i=1; i <= 100; i++){
        console.log((i%3 ? '': 'Ping')+(i%5 ? '' : 'Pong') || i);
    }
}