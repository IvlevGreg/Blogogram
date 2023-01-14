import { createApp } from 'vue'
import App from './App'

import componentsUi from '@/components/UI/index'
import router from '@/router/router'

const app = createApp(App)

componentsUi.forEach((component) => {
  app.component(component.name, component)
})

app.use(router).mount('#app')
