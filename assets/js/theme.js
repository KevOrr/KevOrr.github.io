(function () {

  const themes = ['theme-light', 'theme-dark'];

  function setTheme(idx) {
    idx = Number.isInteger(idx) ? idx : 0;
    localStorage.setItem('theme', idx);
    document.body.classList.forEach(
      (c) => {
        if (c.startsWith('theme-'))
          document.body.classList.remove(c)
      });
    document.body.classList.add(themes[idx]);
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
