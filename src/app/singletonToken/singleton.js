"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.token = [];
    }
    Singleton.getInstace = function () {
        if (Singleton.instace === null) {
            Singleton.instace = new Singleton();
        }
        return Singleton.instace;
    };
    ;
    Singleton.prototype.add = function (token) {
        this.token.push(token);
    };
    Singleton.prototype.remove = function (index) {
        this.token.splice(index, 1);
    };
    Singleton.prototype.show = function () {
        for (var _i = 0, _a = this.token; _i < _a.length; _i++) {
            var tokens = _a[_i];
            console.log(tokens);
        }
    };
    Singleton.instace = null;
    return Singleton;
}());
exports.Singleton = Singleton;
;
var db1 = Singleton.getInstace();
db1.add({ token: window.sessionStorage.getItem('access') });
db1.show();
/*  console.log( db1  === db2); */ 
