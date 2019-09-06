import Veiculo from "./Veiculo";

export default class Moto extends Veiculo {
    private tipoPedal: string;

    constructor(tipoPedal: string, marca: string, modelo: string, motor: string, velocidade: number, ano: number, valor: number){
        super();
        this.tipoPedal = tipoPedal;
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.velocidade = velocidade;
        this.ano = ano;
        this.valor = valor;
    }


    public getTipoPedal(): string {
        return this.tipoPedal;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getMotor(): string {
        return this.motor;
    }
    public getVelocidade(): number {
        return this.velocidade;
    }
    public getAno(): number {
        return this.ano;
    }
    public getValor(): number {
        return this.valor;
    }


    public setTipoPedal(tP: string): string {
        return this.tipoPedal = tP;
    }
    public setMarca(m: string): string {
        return this.marca = m;
    }
    public setModelo(m: string): string {
        return this.modelo = m;
    }
    public setMotor(m: string): string {
        return this.motor = m;
    }
    public setVelocidade(v: number): number {
        return this.velocidade = v;
    }
    public setAno(a: number): number {
        return this.ano = a;
    }
    public setValor(v: number): number {
        return this.valor = v;
    }
}