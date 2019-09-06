export default interface ObjectsInterfaces {
    nomeTabela: string;

    inserir(objeto: any): boolean;
    atualizar(objeto: any): boolean;
    remover(id: number): any;
    selecionar(id: number): any;
    selecionarTudo(): [any];

}