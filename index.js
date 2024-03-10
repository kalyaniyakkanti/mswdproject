const express = require('express');


const app = express();
const dbconfig =require('./db')
const cors = require('cors');
app.use(cors());
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')

app.use('/api/rooms', roomsRoute)
app.use('/api/users',usersRoute)



app.listen(8081)
console.log("server running")