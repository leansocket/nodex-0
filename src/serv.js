'use strict';

exports.init = async function (args) {
    console.log('serv init.');
    nodex.libs.log.init(nodex.runtime.args.app.name);
    console.log('serv init args:', args);
}

exports.start = async function (args) {
    const http = nodex.libs.http;
    const app = http.webapp(args);
    const logic = nodex.runtime.logic;

    app.route(router => {
        router.get('/', http.handler(logic.helloWorld));
    });

    app.start();
    console.log('runtime:', nodex.runtime);
};
