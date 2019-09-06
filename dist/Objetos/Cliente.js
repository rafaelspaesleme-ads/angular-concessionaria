"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, carro, carroDesejado, cpf, cidade, cnh, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.carro = carro;
        this.carroDesejado = carroDesejado;
        this.cpf = cpf;
        this.cidade = cidade;
        this.cnh = cnh;
        this.endereco = endereco;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getIdade = function () {
        return this.idade;
    };
    Cliente.prototype.getCarro = function () {
        return this.carro;
    };
    Cliente.prototype.getCarroDesejado = function () {
        return this.carroDesejado;
    };
    Cliente.prototype.getCpf = function () {
        return this.cpf;
    };
    Cliente.prototype.getCidade = function () {
        return this.cidade;
    };
    Cliente.prototype.getCnh = function () {
        return this.cnh;
    };
    Cliente.prototype.getEndereco = function () {
        return this.endereco;
    };
    Cliente.prototype.setNome = function (n) {
        return this.nome = n;
    };
    Cliente.prototype.setIdade = function (i) {
        return this.idade = i;
    };
    Cliente.prototype.setCarro = function (c) {
        return this.carro = c;
    };
    Cliente.prototype.setCarroDesejado = function (cD) {
        return this.carroDesejado = cD;
    };
    Cliente.prototype.setCpf = function (c) {
        return this.cpf = c;
    };
    Cliente.prototype.setCidade = function (c) {
        return this.cidade = c;
    };
    Cliente.prototype.setCnh = function (c) {
        return this.cnh = c;
    };
    Cliente.prototype.setEndereco = function (e) {
        return this.endereco = e;
    };
    return Cliente;
}());
exports.default = Cliente;
