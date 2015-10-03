var glob = require('glob');
var __ = require('underscore');

module.exports = function(dir) {
    var pathList = glob.sync('**/'+dir+'/**/*Debug.js');
    var keyList = createKey(pathList,dir);
    var valueList = createValue(pathList);
    var ret = __.object(keyList,valueList);
    return ret;
}

function createKey(pathList,dir) {
    return __.map(pathList,function(path){
        // 先頭のディレクトリ名を削除
        var key = path.substr(dir.length+1);
        // 末尾の.jsを削除
        return key.substr(0, (key.length-3));
    });
}

function createValue(pathList) {
    return __.map(pathList,function(path){
        return './'+path;
    });
}