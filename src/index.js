import useApi from './useApi';
import './style.css';

const component = () => {
  useApi();
};

document.body.appendChild(component());