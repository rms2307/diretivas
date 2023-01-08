<template>
  <p v-texto="{ cor: 'green', tamanhoFonte: '200%', totalCaracteres: 25 }">
    Minha primeira diretiva customizada!
  </p>
  <p v-texto="configuracaoTexto">Teste</p>
  <p v-texto="{ cor: 'pink', tamanhoFonte: '150%', totalCaracteres: 15 }">
    Texto maior que 15
  </p>
  <p v-texto>Diretiva sem parametros</p>
</template>

<script>
export default {
  name: "App",
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
