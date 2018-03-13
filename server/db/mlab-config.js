var mongoose = require('mongoose');
var connectionString = 'mongodb://wine:wine@ds012578.mlab.com:12578/winetester';
var connection = mongoose.connection;

mongoose.connect(connectionString);
connection.on('error', err =>{
    console.log('server error:', err);
});
connection.once('open', ()=>{
    console.log('Connected to Database');
});