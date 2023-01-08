import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto', {
  created(el, binding) {
    if (binding.value?.cor) el.style.color = binding.value.cor
    if (binding.value?.tamanhoFonte)
      el.style.fontSize = binding.value.tamanhoFonte

    let totalCaracteres = 25
    if (binding.value?.totalCaracteres)
      totalCaracteres = binding.value.totalCaracteres

    let textoOriginal = el.innerText
    let tamannhoTextoOriginal = textoOriginal.length
    let textoAjustado = ''

    if (tamannhoTextoOriginal > totalCaracteres) {
      textoAjustado = textoOriginal.substring(0, totalCaracteres - 3) + '...'
    } else {
      textoAjustado = textoOriginal
    }

    el.innerText = textoAjustado
  },
})

Vue.mount('#app')
