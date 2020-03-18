(function () {

  const themes = [
    '/assets/css/theme-light.css',
    '/assets/css/theme-dark.css'
  ]

  function setTheme(idx) {
    idx = Number.isInteger(idx) ? idx : 0;
    localStorage.setItem('theme', idx);
    document.querySelector('#theme-style').setAttribute('href', themes[idx]);
  }

  function getLocalTheme() {
    const idx = parseInt(localStorage.getItem('theme'));
    return Number.isInteger(idx) ? idx : 0;
  }

  setTheme(getLocalTheme());

  document.querySelector('#theme-switcher').addEventListener(
    'click',
    () => setTheme((getLocalTheme() + 1) % themes.length)
  );

})();
