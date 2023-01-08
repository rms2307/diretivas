import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto', {
  created(el) {
    el.style.color = 'red'
    el.style.fontSize = '150%'

    let textoOriginal = el.innerText
    let tamannhoTextoOriginal = textoOriginal.length
    let textoAjustado = ''

    if (tamannhoTextoOriginal > 25) {
      textoAjustado = textoOriginal.substring(0, 22) + '...'
    } else {
      textoAjustado = textoOriginal
    }

    el.innerText = textoAjustado
    console.log('Diretiva Aplicada...')
  },
})

Vue.mount('#app')
