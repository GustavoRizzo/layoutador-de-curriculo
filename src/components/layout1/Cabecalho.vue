<template>
<div>
    <div id="cabecalho">
        <h1>{{informacoesPessoais.nome}}</h1>
        <div id="Porfissão">
            <h2>{{informacoesPessoais.profissao}}</h2>
        </div>
        <ul id="dados-contato">
            <li>
                <i class="icon far fa-user"></i>
                <span>{{informacoesPessoais.naturalidade}}, {{informacoesPessoais.estadoCivil}}, {{informacoesPessoais.idade}} anos</span>
            </li>
            <li>
                <i class="icon fas fa-map-marker-alt"></i>
                <span>{{endereco.endereco_completo}}</span>
            </li>
            <li>
                <i class="icon fas fa-mobile-alt"></i>
                <a :href="informacoesPessoais.ref_celular"> +55-{{informacoesPessoais.ddd}}-{{informacoesPessoais.celular}}</a>
            </li>
            <li>
                <i class="icon far fa-envelope"></i>
                <a :href=" `mailto:${informacoesPessoais.email}`">{{informacoesPessoais.email}}</a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import InformacoesPessoais from '../../models/InformacoesPessoais'
import Endereco from '../../models/Endereco'

export default {
    name: 'Cabecalho',
    props: {
        informacoesPessoais: {
            type: InformacoesPessoais
        },
        endereco: {
            type: Endereco
        }
    },
    data() {
        return {}
    }
}
</script>

<style>
#cabecalho{
    background-color: #08b99d;
    padding: 30px 30px 10px 30px;
}

#Porfissão{
    display: inline-flex;
    background-color:  #e3e8ec;
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

#Porfissão h2{
    font-size: 15px;
}
</style>
