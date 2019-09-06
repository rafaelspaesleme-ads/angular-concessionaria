"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loja = /** @class */ (function () {
    function Loja(cliente, carro, moto, nome, endereco, cnpj, horarioUtil, horarioExtra, responsavel) {
        this.cliente = cliente;
        this.carro = carro;
        this.moto = moto;
        this.nome = nome;
        this.endereco = endereco;
        this.cnpj = cnpj;
        this.horarioUtil = horarioUtil;
        this.horarioExtra = horarioExtra;
        this.responsavel = responsavel;
    }
    Loja.prototype.getCliente = function () {
        return this.cliente;
    };
    Loja.prototype.getCarro = function () {
        return this.carro;
    };
    Loja.prototype.getMoto = function () {
        return this.moto;
    };
    Loja.prototype.getNome = function () {
        return this.nome;
    };
    Loja.prototype.getEndereco = function () {
        return this.endereco;
    };
    Loja.prototype.getCnpj = function () {
        return this.cnpj;
    };
    Loja.prototype.getHorarioUtil = function () {
        return this.horarioUtil;
    };
    Loja.prototype.getHorarioExtra = function () {
        return this.horarioExtra;
    };
    Loja.prototype.getResponsavel = function () {
        return this.responsavel;
    };
    Loja.prototype.setCliente = function (c) {
        return this.cliente = c;
    };
    Loja.prototype.setCarro = function (c) {
        return this.carro = c;
    };
    Loja.prototype.setMoto = function (m) {
        return this.moto = m;
    };
    Loja.prototype.setNome = function (n) {
        return this.nome = n;
    };
    Loja.prototype.setEndereco = function (e) {
        return this.endereco = e;
    };
    Loja.prototype.setCnpj = function (c) {
        return this.cnpj = c;
    };
    Loja.prototype.setHorarioUtil = function (hU) {
        return this.horarioUtil = hU;
    };
    Loja.prototype.setHorarioExtra = function (hE) {
        return this.horarioExtra = hE;
    };
    Loja.prototype.setResponsavel = function (r) {
        return this.responsavel = r;
    };
    return Loja;
}());
exports.default = Loja;
