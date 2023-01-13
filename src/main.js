import { createApp } from 'vue'
import App from './App'

import componentsUi from '@/components/UI/index'

const app = createApp(App)

componentsUi.forEach((component) => {
  app.component(component.name, component)
})

app.mount('#app')
