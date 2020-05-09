export default class Endereco {

    constructor(obj){
        this.pais = obj.pais;
        this.uf = obj.uf;
        this.cidade = obj.cidade;
    }

    get endereco_completo (){
        return `${this.cidade} - ${this.uf} - ${this.pais}`;
    }

}
