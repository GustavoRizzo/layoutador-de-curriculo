import * as Gustavo from '../data/Gustavo.json'
import InformacoesPessoais from '../models/InformacoesPessoais'
import Endereco from '../models/Endereco';

export default class CurriculoService{

    constructor(){
        throw new Error('CurriculoService é uma classe estática e não deve ser instanciada');
    }

    static getInformacoesPessoaisGustavo() {

        var infoJson = Gustavo.Curriculo.InformacoesPessoais;

        // Converte String para Date
        infoJson.dataNascimento = new Date(infoJson.dataNascimento);

        let res = new InformacoesPessoais(infoJson);

        return res;
    }

    static getInformacoesEnderecoGustavo() {

        var infoJson = Gustavo.Curriculo.endereco;

        let res = new Endereco(infoJson);

        return res;
    }

}
