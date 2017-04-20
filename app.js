/*
 * LearnJs http server
 * The MIT License
 * Rex Labs
 */

const f = require('fs');
const h = require('http');
const c = require('cluster');
const e = require('express');
const bp = require('body-parser');
const cp = require('cookie-parser');
const n = require('os').cpus().length;

if (c.isMaster) {
    process.stdout.write(`master ${process.pid} is running\n`);

for (let i = 0; i < n; i++) {
    c.fork();
}

c.on('exit', (worker, code, signal) => {
    process.stdout.write(`worker ${worker.process.pid} is dead\n`);
    c.fork();
});

} else {
        var port = process.env.PORT || 1234;
        var app = e();
        var router = e.Router();

        app.use(e.static('assets'));
        app.set('title', "home | learnjs");
        app.use(cp());
        app.use(bp.json());
        app.use(bp.urlencoded({extended: true}));

        router.get('/', (req, res) => {
                res.sendFile(__dirname + '/index.htm');
        });

        app.use('/', router);

        h.createServer(app).listen(port);
    process.stdout.write(`worker ${process.pid} has started\n`);
}
