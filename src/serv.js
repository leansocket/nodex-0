const libs = require('nodex-libs');
const http = libs.http;

const logic = require('./logic');

exports.start = async (args) => {
    let app = http.webapp(args);

    app.route(router => {
        router.post('/', helloWorld);
    });

    app.start();
};

const helloWorld = async ctx => {
    let ret = await logic.helloWord();
    http.send(ctx, ret);
}