import _ from 'lodash';

window.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  root.innerText = _.join(['hello', 'webpack'], ''-'');
});