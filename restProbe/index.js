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

server.post('/moonpay', function (req, res, cb) {
    console.log(req.body)
    res.send("moonpaytesting in POST")

    return cb()
})

server.listen(process.env.PORT || 5000, function () { // bind server to port 5000.
    console.log('% s listening at % s', server.name, server.url
    )

})
