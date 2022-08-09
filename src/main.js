import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
createApp(App).mount('#app')
axios({
    url:'http://123.207.32.32:8000/home/multidata',
   // method:'post'
}).then(
    res=>{
        console.log(res)
    }
)