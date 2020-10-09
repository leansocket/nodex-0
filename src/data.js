'use strict';

exports.init = async function (args) { 
    console.log('data init.');
    await nodex.mysql.init(args.mysql);
};
