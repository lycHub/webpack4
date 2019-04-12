import pic from './assets/sao.gif';
// import './styles/index.scss';  直接这样写会全局生效

// css-loader的options设置开启模块化（modules: true）
import indexStyle from './styles/index.scss';
import createPic from './js/createPic';

window.addEventListener('DOMContentLoaded', function () {
  createPic(pic);
  const root = document.getElementById('root');
  const img = document.createElement('img');
  img.setAttribute('src', pic);

  //  img.classList.add('pic');

  // 模块化写法
  img.classList.add(indexStyle.pic);
  root.appendChild(img);
});