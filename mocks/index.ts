if (typeof window === 'undefined') {
    const { server } = require('./server')
    server.listen()
    console.log("listening");
} else {
    const { worker } = require('./browser')
    worker.start()
    console.log("started");
}

export {}