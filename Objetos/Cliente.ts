import Carro from "./Carro";

export default class Cliente {
    private nome: string;
    private idade: number;
    private carro: string;
    private carroDesejado: Carro;
    private cpf: string;
    private cidade: string;
    private cnh: string;
    private endereco: string;

    constructor(nome: string, idade: number, carro: string, carroDesejado: Carro, cpf: string, cidade: string, cnh: string, endereco: string){
        this.nome = nome;
        this.idade = idade;
        this.carro = carro;
        this.carroDesejado = carroDesejado;
        this.cpf = cpf;
        this.cidade = cidade;
        this.cnh = cnh;
        this.endereco = endereco;
    }

    public getNome(): string {
        return this.nome;
    }
    public getIdade(): number {
        return this.idade;
    }
    public getCarro(): string {
        return this.carro;
    }
    public getCarroDesejado(): Carro {
        return this.carroDesejado;
    }
    public getCpf(): string {
        return this.cpf;
    }
    public getCidade(): string {
        return this.cidade;
    }
    public getCnh(): string {
        return this.cnh;
    }
    public getEndereco(): string {
        return this.endereco;
    }


    public setNome(n: string): string {
        return this.nome = n;
    }
    public setIdade(i: number): number {
        return this.idade = i;
    }
    public setCarro(c: string): string {
        return this.carro = c;
    }
    public setCarroDesejado(cD: Carro): Carro {
        return this.carroDesejado = cD;
    }
    public setCpf(c: string): string {
        return this.cpf = c;
    }
    public setCidade(c: string): string {
        return this.cidade = c;
    }
    public setCnh(c: string): string {
        return this.cnh = c;
    }
    public setEndereco(e: string): string {
        return this.endereco = e;
    }
}