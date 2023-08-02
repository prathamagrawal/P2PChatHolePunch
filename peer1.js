const hyperswarm = require('hyperswarm');

const swarm = new hyperswarm();

const topic = Buffer.from('my-topic'); 

swarm.join(topic, {
    lookup: true,
    announce: true
});

swarm.on('connection', (socket, info) => {
    console.log('Connected to peer:', info.peer);

    socket.write('Hello from Peer 1!');
    socket.on('data', (data) => {
        console.log('Received data from Peer 2:', data.toString());
    });
});
