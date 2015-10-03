var module1 = require('../../../src/module2');

window.onload = function(){
    var ret = module1.fn('module2/normal/doFnDebug');
    console.log(ret);
}