import { createApp } from 'vue'
import App from './App'

import componentsUi from '@/components/UI/index'
import router from '@/router/router'
import directives from '@/directives/index'
import store from '@/store'

const app = createApp(App)

componentsUi.forEach((component) => {
  app.component(component.name, component)
})

directives.forEach((directiveEl) => app.directive(directiveEl.name, directiveEl))

app.use(router).use(store).mount('#app')
