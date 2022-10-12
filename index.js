const http = require('http');
const port = 9000;
const data = {
    FirstName:'Kava',
    LastName:'Ajay',
    Age:22,
    city:'Kurnool'
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
    res.write(`<h1> Welcome To Prepbytes </h1>`);
    res.write(`<h2> Hello!! KAVA </h2>`);
    res.write(jsonData);
    res.end();
})


server.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})