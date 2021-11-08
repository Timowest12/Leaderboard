import useApi from './useApi';
import './style.css';

function component() {
  useApi();
}

document.body.appendChild(component());