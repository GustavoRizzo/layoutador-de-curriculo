<template>
<div>
    <Cabecalho v-bind:informacoesPessoais="infoCabecalho.pessoais" v-bind:endereco="infoCabecalho.endereco"></Cabecalho>
</div>
</template>

<script>
import Cabecalho from '../components/layout1/Cabecalho'
import InformacoesPessoais from '../models/InformacoesPessoais'
import Endereco from '../models/Endereco'

export default {
    name: 'CurriculoLayoutado',
    components: {
        Cabecalho
    },
    data() {
        return {
            infoCabecalho: {
                pessoais: InformacoesPessoais,
                endereco: Endereco
            }
        }
    },
    created() {
        this.infoCabecalho.pessoais = new InformacoesPessoais(this.$store.state.formularioCurriculo.infoPessoais);
        this.infoCabecalho.endereco = new Endereco(this.$store.state.formularioCurriculo.endereco);
    }
}
</script>

<style>

@font-face{
    font-family: 'gotham bold';
    src: url(../assets/font/GothamBold.ttf);
}

@font-face {
    font-family: 'myriad pro';
    src: url(../assets/font/myriad-pro-black-condensed.otf);
}

h1{
    font-family: 'gotham bold' ;
    color : whitesmoke;
}

h2{
    text-transform: uppercase;
    color : black;
    font-size: 20px;
    font-weight: 650;
    margin: 2px;
}

li{
    font-weight: 500
}

.icon {
    position: relative;
    font-size: 20px;
    color: #08b99d;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    background: black;
    border-radius: 50%;
    margin: 4px;
}
.icon::before {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.sessao{
    background-color: white;
    padding: 10px 30px 10px 30px;
}

.titulo-card{
    display: flex;
    align-items: center;
    margin: 0 0 5px 0;
}

.titulo-card .barra {
    top: 50%;
    flex-grow: 2;
    height: 3px;
    background-color: red;
}

.titulo-card h2 {
    margin: 0 10px;
}

.idioma .bandeira{
    height: 60px;
    width: 90px;
    border-radius: 8px;
    margin: 0 10px;
}

.idioma ul{
    text-align: center;
}

.idioma li{
    display: inline-block;
}
</style>
