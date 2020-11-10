$('.tabs a, #sidebarExtension h4').on('click', function() {
  $('.tabs a').removeClass('active');
  setModule($(this).attr('id'));
});

function setModule(name) {
  $('.module').hide();
  $(`#${name}Module`).show();
  $(`#${name}`).addClass('active');
<<<<<<< HEAD

  const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}?module=${name}`;
  window.history.pushState({ path: newURL }, '', newURL);
}

setModule(module || 'overview');
=======
}

$('input').on('input', function() {
  $(this)[0].checkValidity()
    ? $(this).removeClass('border border-danger')
    : $(this).addClass('border border-danger');

  $('button.btn.btn-success')
    .attr('disabled', !$('form')[0].checkValidity());
});

setModule('overview');
>>>>>>> 27d66cce7102f93d5181ee8bf4521f4a7431ba34
