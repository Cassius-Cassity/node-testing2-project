const server = require('./api/server') // pulling in server 

const PORT = process.env.PORT || 6000 //establishing a port

server.listen(PORT, () => console.log(`api up and running on ${PORT}`)) //telling the server what port we are on
