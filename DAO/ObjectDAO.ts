import ObjectsInterfaces from '../Interface/ObjectsInterface';

// Generic class!!!
export default class ObjectDAO<T> implements ObjectsInterfaces {
    nomeTabela: string = 'tb_loja';

    inserir(objeto: T): boolean {
        if(objeto != null){
            console.log('Objeto inserido!');
            return true;
        } else {
            console.log('Objeto vazio!');
            return false;
        }
    }

    atualizar(objeto: T): boolean {
        if(objeto != null){
            console.log('Objeto atualizado');
            return true;
        } else {
            console.log('Objeto vazio!');
            return false;
        }
    }
    remover(id: number): any {
        console.log('Removeu!');
        return new Object(id);
    }
    selecionar(id: number): any {
        console.log('Lista unica!');
        return new Object(id);
    }
    selecionarTudo(): [any] {
        console.log('Listou todas!');
        return [new Object];
    }
}