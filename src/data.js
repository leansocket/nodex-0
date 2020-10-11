'use strict';

const { libs } = nodex;
const { mysql } = libs;


exports.init = async function (args) { 
    console.log('data init.');
    await mysql.init(args.mysql);
};
