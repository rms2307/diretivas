<template>
  <p v-texto="{ cor: 'green', tamanhoFonte: '200%', totalCaracteres: 25 }">
    Minha primeira diretiva customizada!
  </p>
  <p v-texto="configuracaoTexto">Teste</p>
  <p v-texto="{ cor: 'pink', tamanhoFonte: '150%', totalCaracteres: 15 }">
    Texto maior que 15
  </p>
  <div v-posicao:absolute="150" v-texto="{ cor: 'green' }">
    Olá, eu sou um binding de argumento e valor
  </div>
  <hr />
  <h1 v-colorir-fundo="'red'">Diretiva customizada local</h1>
</template>

<script>
export default {
  name: "App",
  directives: {
    colorirFundo: {
      created: function (el, binding) {
        el.style.background = binding.value;
      },
    },
  },
  data: () => ({
    configuracaoTexto: {
      cor: "blue",
      tamanhoFonte: "300%",
      totalCaracteres: 15,
    },
  }),
};
</script>

<style>
</style>
