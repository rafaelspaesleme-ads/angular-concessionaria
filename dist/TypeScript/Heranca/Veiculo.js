"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    Veiculo.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Veiculo.prototype.setVelocidade = function (v) {
        return this.velocidade = v;
    };
    return Veiculo;
}());
exports.default = Veiculo;
