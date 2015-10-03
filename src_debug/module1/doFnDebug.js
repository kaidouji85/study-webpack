var module1 = require('../../src/module1.js');

window.onload = function(){
    var ret = module1.fn('module1/doFnDebug');
    console.log(ret);
}