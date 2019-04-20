// import "@babel/polyfill";
import pic from './assets/sao.gif';
import './styles/index.scss';
import createPic from './js/createPic';
import _ from 'lodash';
import {isDate} from "date-fns";

window.addEventListener('DOMContentLoaded', function () {
  // console.log('NODE_ENV', process.env.NODE_ENV);
  createPic(pic);
  const root = document.getElementById('root');
 /* const img = new Image();
  img.src = pic;*/
 const img = document.createElement('img');
 img.setAttribute('src', pic);
//  img.classList.add('pic');
 img.classList.add('pics');
 root.appendChild(img);
  
  
  console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
  
  console.log('isDate', isDate('mayonnaise'));
});