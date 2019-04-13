// import "@babel/polyfill";
import pic from './assets/sao.gif';
import indexStyle from './styles/index.scss';
import createPic from './js/createPic';

window.addEventListener('DOMContentLoaded', function () {
  createPic(pic);
  const root = document.getElementById('root');
 /* const img = new Image();
  img.src = pic;*/
 const img = document.createElement('img');
 img.setAttribute('src', pic);
//  img.classList.add('pic');
 img.classList.add(indexStyle.pic);
 root.appendChild(img);
 consele.log('aaa');
});