<template>
<div>

    <Cabecalho v-bind:informacoesPessoais="infoCabecalho" ></Cabecalho>

    <div class="formacao-academica sessao">
        <div class="titulo-card">
            <div class="barra"></div>
            <h2>Fomação Academica</h2>
            <i class="fas fa-graduation-cap fa-2x"></i>
        </div>
        <ul>
            <li>
                <span>Graduado em Engenharia de Controle e Atumação <br> PUC-Rio (Ponticícia UniversidadeCatólica do Rio de Janeiro) - 2017</span>
            </li>
        </ul>
    </div>

    <div class="experiencia-proficional sessao">
        <div class="titulo-card">
            <i class="fas fa-briefcase fa-2x"></i>
            <h2>Experiência Profissional</h2>
            <div class="barra"></div>
        </div>
        <ul>
            <li>
                <span>Analista de Ineficiência Logística - Stone Pagamentos</span>
            </li>
            <li>
                <span>Atendimento ao Cliente (estágio) - Stone Pagamentos</span>
            </li>
            <li>
                <span>Desenvolvimento WEB (estágio) - Laboratório de Inteligência e Robótica Aplicado (LIRA)</span>
            </li>
        </ul>
    </div>

    <div class="idioma sessao">
        <div class="titulo-card">
            <div class="barra"></div>
            <h2>Idiomas</h2>
            <i class="fas fa-globe-americas fa-2x"></i>
        </div>
        <ul>
            <li>
                <img class="bandeira" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/290px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png">
                <span>- Avançado</span>
            </li>
            <li>
                <img class="bandeira" src="https://i.pinimg.com/originals/46/3c/9b/463c9bb80ad2725118cc59b2d98b8609.png">
                <span>- Intermediário</span>
            </li>
        </ul>
    </div>

    <div class="sowftware-expertises sessao">
        <div class="titulo-card">
            <i class="fas fa-laptop-code fa-2x"></i>
            <h2>Software e Expertises</h2>
            <div class="barra"></div>
        </div>
        <ul>
            <li>
                <span>Linguagens de Programação: C#, Python, R e SQL</span>
            </li>
            <li>
                <span>Pacote Office e VBA/Macro</span>
            </li>
            <li>
                <span>Eletrônica e Industria: Arduino e CLP</span>
            </li>
            <li>
                <span>Software de Matemática: MATLAB, Scilab e Maple</span>
            </li>
            <li>
                <span>Software de Desenho: Photoshop</span>
            </li>
        </ul>
    </div>

    <div class="experiencias-extras sessao">
        <div class="titulo-card">
            <div class="barra"></div>
            <h2>Experiências Extras</h2>
            <i class="fas fa-expand-arrows-alt fa-2x"></i>
        </div>
        <ul>
            <li>
                <span>Vencedor do Hanking Rio 2019 no cluster de Construção Civil</span>
            </li>
            <li>
                <span>Fundador do capitulo estudantil IEEE PUC-Rio (Institute of Electrical and Eletronics Engineers)</span>
            </li>
            <li>
                <span>Monitor de Introdução a Engenharia</span>
            </li>
            <li>
                <span>Brigadista de Incêndio</span>
            </li>
            <li>
                <span>Hobby: escaladas e trilhas</span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Cabecalho from '../components/layout1/Cabecalho'
import InformacoesPessoais from '../models/InformacoesPessoais'
import CurriculoService from '../services/CurriculoService'

export default {
    name: 'Contratado',
    data() {
        return {
            infoCabecalho: new InformacoesPessoais({
                nome: 'Gustavo Rizzo',
                profissao: 'Engenheiro'
            })
        }
    },
    components: {
        Cabecalho
    },
    methods: {
        getInformacoesPessoais: function (){
            this.infoCabecalho = CurriculoService.getInformacoesPessoaisGustavo();
        }
    },
    created(){
        this.getInformacoesPessoais();
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
