<template>
<div>
    <div id="cabecalho">
        <h1>Gustavo Rizzo Soares Mandes de Albuquerque</h1>
        <div id="Porfissão">
            <h2>Engenheiro de Controle e Automação</h2>
        </div>
        <ul id="dados-contato">
            <li>
                <i class="icon far fa-user"></i>
                <span>Brasileiro, solteiro, 27 anos (07/05/1993)</span>
            </li>
            <li>
                <i class="icon fas fa-map-marker-alt"></i>
                <span>Tijuca - Rio de Janeiro - RJ</span>
            </li>
            <li>
                <i class="icon fas fa-mobile-alt"></i>
                <a href="tel:+55-21-98866-2374">+55 (21) 988662374</a>
            </li>
            <li>
                <i class="icon far fa-envelope"></i>
                <a href="mailto: grizzo.albu@gmail.com">grizzo.albu@gmail.com</a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cabecalho',
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
