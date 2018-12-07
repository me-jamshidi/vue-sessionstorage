import sessionStorage from './src/sessionStorage';
import mockStorage from './src/mockStorage';

// ------------------------------------------------------
// Init
// ------------------------------------------------------

if (!window.sessionStorage) {
    window.sessionStorage = mockStorage;
}

const STORAGE = {
  install (Vue, options) {
    Vue.session = new sessionStorage()
    Vue.prototype.$session = Vue.session
  }
}

module.exports = STORAGE
