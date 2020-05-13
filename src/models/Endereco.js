export default class Endereco {

    constructor(obj){
        let default_values = {
            pais: '',
            uf: '',
            cidade: ''
        }
        obj = {...default_values, ...obj};

        this.pais = obj.pais;
        this.uf = obj.uf;
        this.cidade = obj.cidade;
    }

    get endereco_completo (){
        return `${this.cidade} - ${this.uf} - ${this.pais}`;
    }

}
