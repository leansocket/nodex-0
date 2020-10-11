'use strict';

const { libs, runtime } = nodex;

exports.init = async function (args) {
    libs.log.init(runtime.args.app.name);
    console.log('serv init.');
    console.log('serv init args:', args);
}

exports.start = async function (args) {
    const http = libs.http;
    const app = http.webapp(args);
    const logic = runtime.logic;

    app.route(router => {
        router.get('/', http.handler(logic.helloWorld));
    });

    app.start();
    console.log('runtime:', runtime);
};
