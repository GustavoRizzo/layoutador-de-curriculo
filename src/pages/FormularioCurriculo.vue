<template>
<div>
    <form class="form">

        <div class="dados-pessois">

            <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input type="text" id="nome" class="form-control" required autofocus />
            </div>

            <div class="form-group">
                <label for="profissao">Profissão</label>
                <input type="text" id="profissao" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="naturalidade">Naturalidade</label>
                <input type="text" id="naturalidade" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="dataNascimento">Data de Nascimento</label>
                <input type="date" id="dataNascimento" class="form-control" required/>
            </div>

            <div class="form-group">
                <label for="ddd">DDD</label>
                <input type="number" id="ddd" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="celular">Celular</label>
                <input type="tel" id="celular" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" required />
            </div>
        </div>

        <div class="form-endereco">
            <div class="form-group">
                <label for="pais">Pais</label>
                <input type="text" id="pais" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="uf">UF</label>
                <input type="text" id="uf" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" class="form-control" required />
            </div>
        </div>

        <button class="btn btn-primary" type="submit">Incluir</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'FormularioCurriculo',
    data() {
        return {}
    }
}
</script>
