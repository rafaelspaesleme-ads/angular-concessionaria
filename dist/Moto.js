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
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(tipoPedal, marca, modelo, motor, velocidade, ano, valor) {
        var _this = _super.call(this) || this;
        _this.tipoPedal = tipoPedal;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.motor = motor;
        _this.velocidade = velocidade;
        _this.ano = ano;
        _this.valor = valor;
        return _this;
    }
    Moto.prototype.getTipoPedal = function () {
        return this.tipoPedal;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getMotor = function () {
        return this.motor;
    };
    Moto.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Moto.prototype.getAno = function () {
        return this.ano;
    };
    Moto.prototype.getValor = function () {
        return this.valor;
    };
    Moto.prototype.setTipoPedal = function (tP) {
        return this.tipoPedal = tP;
    };
    Moto.prototype.setMarca = function (m) {
        return this.marca = m;
    };
    Moto.prototype.setModelo = function (m) {
        return this.modelo = m;
    };
    Moto.prototype.setMotor = function (m) {
        return this.motor = m;
    };
    Moto.prototype.setVelocidade = function (v) {
        return this.velocidade = v;
    };
    Moto.prototype.setAno = function (a) {
        return this.ano = a;
    };
    Moto.prototype.setValor = function (v) {
        return this.valor = v;
    };
    return Moto;
}(Veiculo_1.default));
exports.default = Moto;
