import Template from './template/script.js';
import api from './template/api.js'
import './Style/style.css'

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
  })();