import { file, parse } from './globals.js';
function component() {
    var element = document.createElement('div');
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    return element;
  }
  console.log(file,parse)
  document.body.appendChild(component());