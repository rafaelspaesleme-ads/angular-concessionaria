"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic class!!!
var ObjectDAO = /** @class */ (function () {
    function ObjectDAO() {
        this.nomeTabela = 'tb_loja';
    }
    ObjectDAO.prototype.inserir = function (objeto) {
        if (objeto != null) {
            console.log('Objeto inserido!');
            return true;
        }
        else {
            console.log('Objeto vazio!');
            return false;
        }
    };
    ObjectDAO.prototype.atualizar = function (objeto) {
        if (objeto != null) {
            console.log('Objeto atualizado');
            return true;
        }
        else {
            console.log('Objeto vazio!');
            return false;
        }
    };
    ObjectDAO.prototype.remover = function (id) {
        console.log('Removeu!');
        return new Object(id);
    };
    ObjectDAO.prototype.selecionar = function (id) {
        console.log('Lista unica!');
        return new Object(id);
    };
    ObjectDAO.prototype.selecionarTudo = function () {
        console.log('Listou todas!');
        return [new Object];
    };
    return ObjectDAO;
}());
exports.default = ObjectDAO;
