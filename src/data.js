'use strict';

const { libs } = nodex;

exports.init = async function (args) { 
    console.log('data init.');
    const mysql = libs.mysql;
    await mysql.init(args.mysql);
};
