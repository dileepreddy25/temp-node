const htpp = require('http')

const server = htpp.createServer((req, res)=>{
    if(req.url === '/home'){
        res.end('This is our home page')
    }
    if(req.url === '/about'){
        res.end('This is our brief introduction')
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>We can't seem to find the page you are requesting for</p>
    <a href="/home">Back to Home Page</a>
    `)
})

server.listen(5000)