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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = __importDefault(require("./Veiculo"));
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(quantidadePortas, marca, modelo, motor, velocidade, ano, valor) {
        var _this = _super.call(this) || this;
        _this.quantidadePortas = quantidadePortas;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.motor = motor;
        _this.velocidade = velocidade;
        _this.ano = ano;
        _this.valor = valor;
        return _this;
    }
    Carro.prototype.getQuantidadePorta = function () {
        return this.quantidadePortas;
    };
    Carro.prototype.getMarca = function () {
        return this.marca;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.getMotor = function () {
        return this.motor;
    };
    Carro.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.getValor = function () {
        return this.valor;
    };
    Carro.prototype.setQuantidadePorta = function (qP) {
        return this.quantidadePortas = qP;
    };
    Carro.prototype.setMarca = function (m) {
        return this.marca = m;
    };
    Carro.prototype.setModelo = function (m) {
        return this.modelo = m;
    };
    Carro.prototype.setMotor = function (m) {
        return this.motor = m;
    };
    Carro.prototype.setVelocidade = function (v) {
        return this.velocidade = v;
    };
    Carro.prototype.setAno = function (a) {
        return this.ano = a;
    };
    Carro.prototype.setValor = function (v) {
        return this.valor = v;
    };
    return Carro;
}(Veiculo_1.default));
exports.default = Carro;
