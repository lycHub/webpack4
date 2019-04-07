import pic from './assets/5c334c56f2328.gif';

window.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
 /* const img = new Image();
  img.src = pic;*/
 const img = document.createElement('img');
 img.setAttribute('src', pic);
  root.appendChild(img);
});