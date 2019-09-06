"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LojaDAO = /** @class */ (function (_super) {
    __extends(LojaDAO, _super);
    function LojaDAO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nomeTabela = 'tb_loja';
        return _this;
    }
    LojaDAO.prototype.inserir = function (objeto) {
        if (objeto != null) {
            console.log('Objeto inserido!');
            return true;
        }
        else {
            console.log('Objeto vazio!');
            return false;
        }
    };
    return LojaDAO;
}(ObjectsInterfaces));
exports.default = LojaDAO;
