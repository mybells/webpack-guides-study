  import _ from 'lodash';
  import './style.css';//package.json中不能有"sideEffects"这个配置选项，否则css不会加载上，这个选项会清除没有用到的模块
  import Data from './data.xml';
  function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  console.log(Data)
  document.body.appendChild(component());