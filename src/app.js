let libs = require('nodex-libs');

async function main() {
    const args = require("./args");
    libs.log.init(args.app.name);

    let data = require('./data');
    await data.init(args.data);

    let logic = require('./logic');
    await logic.init(args.logic);

    let serv = require('./serv');
    await serv.start(args.serv);
}

main();
