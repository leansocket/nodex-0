'use strict';

exports.init = async function (args) {
    console.log('serv init.')
    nodex.log.init(nodex.runtime.args.app.name)
    console.log('serv init args:', args)
}

exports.start = async function (args) {
    const http = nodex.http;
    const app = http.webapp(args);

    app.route(router => {
        router.get('/', http.handler(nodex.runtime.logic.helloWorld));
    });

    app.start();
    console.log('runtime:', nodex.runtime)
};
