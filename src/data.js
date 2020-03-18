const libs = require('nodex-libs');
const mysql = libs.mysql;

exports.init = async function (args) { 
    console.log('data init.');
    await mysql.init(args.mysql);
};
