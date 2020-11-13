$('#settingsModule #themeSelect').on('change', function() {
  setTheme($(this).val())
});

function setTheme(theme) {
  $('#settingsModule #themeSelect').val(theme);
  localStorage.setItem('theme', theme);
  document
    .querySelector('html')
    .setAttribute('theme', theme);
}

setTheme(localStorage.getItem('theme'));