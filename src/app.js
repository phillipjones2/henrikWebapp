// import Router from './router'
// import styles from './styles/main.styl'
// import icons from 'octicons/octicons/octicons.css'
// import app from 'ampersand-app'
// import Me from './models/me'
//
// window.app = app
//
// app.extend({
//   init () {
//     this.me = new Me()
//     this.me.fetchInitialData()
//     this.router = new Router()
//     this.router.history.start()
//   }
// })
//
// app.init()

import Router from './router'
import styles from './styles/main1.styl'

window.app = {
  init () {
    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()
