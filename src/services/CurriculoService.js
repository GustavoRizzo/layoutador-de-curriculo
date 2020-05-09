import * as Gustavo from '../data/Gustavo.json'
import InformacoesPessoais from '../models/InformacoesPessoais'

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

}
