export default class InformacoesPessoais {

    constructor(obj){
        let default_values = {
            nome: '',
            profissao: '',
            naturalidade: '',
            estadoCivil: '',
            dataNascimento: new Date(),
            ddd: '',
            celular: '',
            email: ''
        }
        obj = {...default_values, ...obj};

        this.nome = obj.nome;
        this.profissao = obj.profissao;
        this.naturalidade = obj.naturalidade;
        this.estadoCivil = obj.estadoCivil;
        this.dataNascimento = obj.dataNascimento;
        this.ddd = obj.ddd;
        this.celular = obj.celular;
        this.email = obj.email;
    }

    get idade() {

        let diff_ms = Date.now() - this.dataNascimento.getTime();
        let age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    get ref_celular (){
        return `+55-${this.ddd}-${this.celular}`;
    }

}
