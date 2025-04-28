import './style.css';
import Icon from './photo.jpg';
import { greeting } from './greetings.js';
import data from './data.xml';

function component() {
    const element = document.createElement('div');
    element.innerHTML = greeting;
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(data);
    return element;
}


document.body.appendChild(component());