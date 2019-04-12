export default function createPic(pic) {
  const root = document.getElementById('root');
  /* const img = new Image();
  img.src = pic;*/
  const img = document.createElement('img');
  img.setAttribute('src', pic);
  root.appendChild(img);
}