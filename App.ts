import Cliente from './Objetos/Cliente';
import Loja from './Objetos/Loja';
import Carro from './Objetos/Carro';
import Moto from './Objetos/Moto';
import ObjectDAO from './DAO/ObjectDAO';


let carro1 = new Carro(4, 'Lamborguini', 'Vx5000', 'v30000', 500, 2019, 1000000.00);
let carro2 = new Carro(2, 'Fusca', '74', '8v', 70, 1974, 10000000.00);
let carro3 = new Carro(3, 'Fiat', 'Strada', '2.0', 120, 2015, 40000.00);

 let cli1 = new Cliente('Joaquim', 50, 'Palio 2005', carro3, '54876235499', 'Paraiba do Sul', '5578800087', 'Rua X');
 let cli2 = new Cliente('Jose', 74, 'Fusca 1976', carro1, '78498600011', 'Areal', '887700445', 'Rua Y');
 let cli3 = new Cliente('Da Silva Xavier', 23, 'Ferrari 2020', carro2, '7775559911', 'Londres', '99---74', 'Rua K');

 let moto1 = new Moto('pato', 'honda', 'cros', '250cil', 240, 2018, 10000.00)
 let moto2 = new Moto('amplo', 'yamaha', 'cros', '250cil', 180, 2017, 9000.00);
 let moto3 = new Moto('slim', 'honda', 'bis', '50c', 80, 2002, 900.00);

 let loja = new Loja(
    [cli1, cli2, cli3], 
    [carro1, carro2, carro3], 
    [moto1, moto2, moto3], 
    '123 Veiculos', 
    'Rua 15 de novembro, 26, centro, Tres Rios, RJ, Brasil', 
    '123456789000001', 
    ['seg: 8:00 as 18:00', 'ter: 8:00 as 18:00', 'qua: 8:00 as 18:00', 'qui: 8:00 as 18:00', 'sex: 8:00 as 18:00'], 
    ['sab: 08:00 as 12:00'], 
    'Joao do Camburao');

    let daoMoto: ObjectDAO<Moto> = new ObjectDAO;
    let daoCarro: ObjectDAO<Carro> = new ObjectDAO;
    let daoCliente: ObjectDAO<Cliente> = new ObjectDAO;
    let daoLoja: ObjectDAO<Loja> = new ObjectDAO;

    daoCarro.inserir(carro1);
    daoCarro.inserir(carro2);
    daoCarro.inserir(carro3);

    daoCliente.inserir(cli1);
    daoCliente.inserir(cli2);
    daoCliente.inserir(cli3);

    daoMoto.inserir(moto1);
    daoMoto.inserir(moto2);
    daoMoto.inserir(moto3);

    daoLoja.inserir(loja);

    daoLoja.atualizar(loja);
    daoLoja.selecionar(1);
    daoLoja.selecionarTudo();
    daoLoja.remover(1);
    daoLoja.nomeTabela

    console.log(loja);
    console.log(daoCarro);
    console.log(daoMoto);
    console.log(daoCliente);
    console.log(daoLoja);
    