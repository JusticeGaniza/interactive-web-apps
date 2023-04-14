import company from './configuration.js' //spelling of "from" is incorrectin both imports and file path did not start with "./"
import year from './configuration.js' // and they did not end with .js

const message = '© ' + company + year
document.querySelector('footer').innerText = message