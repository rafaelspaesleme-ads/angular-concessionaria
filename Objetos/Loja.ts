import Cliente from './Cliente';
import Carro from './Carro';
import Moto from './Moto';


export default class Loja {
    private cliente: Array<Cliente>;
    private carro: Array<Carro>;
    private moto: Array<Moto>;
    private nome: string;
    private endereco: string;
    private cnpj: string;
    private horarioUtil: Array<string>;
    private horarioExtra: Array<string>;
    private responsavel: string;

    constructor(cliente: Array<Cliente>, carro: Array<Carro>, moto: Array<Moto>, nome: string, endereco: string, cnpj: string, horarioUtil: Array<string>, horarioExtra: Array<string>, responsavel: string){
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

    public getCliente(): Array<Cliente> {
        return this.cliente;
    }
    public getCarro(): Array<Carro> {
        return this.carro;
    }
    public getMoto(): Array<Moto> {
        return this.moto;
    }
    public getNome(): string {
        return this.nome;
    }
    public getEndereco(): string {
        return this.endereco;
    }
    public getCnpj(): string {
        return this.cnpj;
    }
    public getHorarioUtil(): Array<string> {
        return this.horarioUtil;
    }
    public getHorarioExtra(): Array<string> {
        return this.horarioExtra;
    }
    public getResponsavel(): string {
        return this.responsavel;
    }

    public setCliente(c: Array<Cliente>): Array<Cliente> {
        return this.cliente = c;
    }
    public setCarro(c:Array<Carro>):Array<Carro> {
        return this.carro = c;
    }
    public setMoto(m: Array<Moto>): Array<Moto> {
        return this.moto = m;
    }
    public setNome(n: string): string {
        return this.nome = n;
    }
    public setEndereco(e: string): string {
        return this.endereco = e;
    }
    public setCnpj(c: string): string {
        return this.cnpj = c;
    }
    public setHorarioUtil(hU: Array<string>): Array<string> {
        return this.horarioUtil = hU;
    }
    public setHorarioExtra(hE: Array<string>): Array<string> {
        return this.horarioExtra = hE;
    }
    public setResponsavel(r: string): string {
        return this.responsavel = r;
    }
}