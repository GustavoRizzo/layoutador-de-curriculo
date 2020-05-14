<template>
<div>
    <h1>Testando Vuex</h1>
    <h2>{{$store.state.user.email}}</h2>
</div>
</template>

<script>
export default {
    name: 'CurriculoLayoutado',
    data() {
        return {
            oi_data: 'oi'
        }
    },
    created() {
    console.log(this.$store);
    console.log(this.$store.state.user);
    }
}
</script>