<template>
<div>
    <form class="form" @submit.prevent="gravar()">

        <div class="dados-pessois">

            <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input type="text" id="nome" class="form-control" required autofocus v-model="infoPessoais.nome" />
            </div>

            <div class="form-group">
                <label for="profissao">Profissão</label>
                <input type="text" id="profissao" class="form-control" required  v-model="infoPessoais.profissao" />
            </div>

            <div class="form-group">
                <label for="naturalidade">Naturalidade</label>
                <input type="text" id="naturalidade" class="form-control" required v-model="infoPessoais.naturalidade" />
            </div>

            <div class="form-group">
                <label for="dataNascimento">Data de Nascimento</label>
                <input type="date" id="dataNascimento" class="form-control" required v-on:input="infoPessoais.dataNascimento = new Date($event.target.value)"/>
            </div>

            <div class="form-group">
                <label for="estadoCivil">Estado Civil</label>
                <input type="text" id="estadoCivil" class="form-control" required v-model="infoPessoais.estadoCivil" />
            </div>

            <div class="form-group">
                <label for="ddd">DDD</label>
                <input type="number" id="ddd" class="form-control" required v-model="infoPessoais.ddd" />
            </div>

            <div class="form-group">
                <label for="celular">Celular</label>
                <input type="tel" id="celular" class="form-control" required v-model="infoPessoais.celular" />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" required v-model="infoPessoais.email" />
            </div>
        </div>

        <div class="form-endereco">
            <div class="form-group">
                <label for="pais">Pais</label>
                <input type="text" id="pais" class="form-control" required v-model="endereco.pais" />
            </div>

            <div class="form-group">
                <label for="uf">UF</label>
                <input type="text" id="uf" class="form-control" required v-model="endereco.uf" />
            </div>

            <div class="form-group">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" class="form-control" required v-model="endereco.cidade" />
            </div>

        </div>

        <button class="btn btn-primary" type="submit">Incluir</button>
    </form>
</div>
</template>

<script>
import InformacoesPessoais from '../models/InformacoesPessoais'
import Endereco from '../models/Endereco.js'

export default {
    name: 'FormularioCurriculo',
    data() {
        return {
            endereco: new Endereco(),
            infoPessoais: new InformacoesPessoais(),
            data_teste: new Date()
        }
    },
    methods: {
        gravar() {
            console.log('excutando método gravar.');
            console.log(this.infoPessoais);
            console.log(this.endereco);
        }
    }
}
</script>
