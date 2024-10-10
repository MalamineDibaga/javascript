const mqtt = require('mqtt');
const server = 'mqtt://10.0.10.77:1883';
const options = {
clientId: 'bouhenic',
username: 'snir',
password: 'passsnir'
};
const client = mqtt.connect(server, options);
client.on('connect', () => {
console.log('Connected to MQTT broker');
client.subscribe('ha/_temperature2', { qos: 0 });
});
client.on('message', (topic, message) => {
console.log(`${topic} ${message.toString()}`);
});
client.on('error', (err) => {
console.error('Connection error:', err);
client.end();
});