require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 9000;

const server = express();

server.use(express.json());

server.get('/api/hello', (req, res)=>{
    res.json({message: 'api is working'});
})

server.use('*', (req, res)=>{
    res.send('<h1>Hello, there!</h1>')
})

server.use((err, req, res, next)=>{
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});