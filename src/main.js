import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('teste',{
    created(){
        console.log("Diretiva Aplicada...")
    }
})

Vue.mount('#app')