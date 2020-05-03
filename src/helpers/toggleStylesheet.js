const insertStylesheet = ({ isDark }, cb) => {
  const link = document.createElement('link');
  link.href = `/css/theme${isDark ? '-dark' : ''}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.className = 'theme-stylesheet';

  link.onload = cb;
  document.getElementsByTagName('head')[0].appendChild(link);
};

export default ({ isDark }, cb) => {
  Array.from(document.getElementsByClassName('theme-stylesheet')).forEach(link => link.remove());
  insertStylesheet({ isDark }, cb);
};
