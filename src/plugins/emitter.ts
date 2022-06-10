import mitt from 'mitt'
import { App } from 'vue'
const emitter = mitt()

const plugin = {
  install(app: App) {
    app.provide('emitter', emitter)
    app.config.globalProperties.$emitter = emitter
  }
}

export default plugin
