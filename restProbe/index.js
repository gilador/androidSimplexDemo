const restify = require('restify') // require the restify library.
const server = restify.createServer() // create an HTTP server.

server.use(restify.plugins.jsonBodyParser({mapParams: true}))
server.get('/', function (req, res, cb) {
    return cb()
})

server.get('/mooneypay', function (req, res, cb) {
    res.send("moonpaytesting in GET")

    return cb()
})

server.post('/tx', function (req, res, cb) {
    console.log(JSON.stringify(req.body))
    res.send("tx in POST")

    return cb()
})

server.post('/id', function (req, res, cb) {
    console.log(JSON.stringify(req.body))
    res.send("id1232 in POST")

    return cb()
})

server.listen(process.env.PORT || 5000, function () { // bind server to port 5000.
    console.log('% s listening at % s', server.name, server.url
    )

})
