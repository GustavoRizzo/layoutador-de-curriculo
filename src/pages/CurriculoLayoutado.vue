<template>
<div>
    <h1>Testando Vuex</h1>
    <h2>{{$store.state.user.email}}</h2>

    <h2>endreço</h2>
    <h1>{{infoCabecalho}}</h1>

</div>
</template>

<script>
export default {
    name: 'CurriculoLayoutado',
    data() {
        return {
            oi_data: 'oi',
            infoCabecalho: {}
        }
    },
    created() {
    console.log(this.$store);
    console.log(this.$store.state.user);
    this.$store.state.user.email = 'carneiro@emial.com';
    console.log(this.$store.state.user);
    this.$store.state.teste = 'store';
    console.log(this.$store.state.formularioCurriculo);

    this.infoCabecalho = {
        enderco: this.$store.state.formularioCurriculo.endereco,
        infoPessoais: this.$store.state.formularioCurriculo.infoPessoais
    }
    console.log(this.infoCabecalho);

    }
}
</script>
