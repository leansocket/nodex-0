'use strict';

exports.init = async function (args) { 
    console.log('data init.');
    const mysql = nodex.libs.mysql;
    await mysql.init(args.mysql);
};
