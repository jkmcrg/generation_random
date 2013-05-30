$(function () {
  $('input#number_number').keyup(function () {
    var decimals = $('.decimals input[type=radio]:checked').val()
    if ($(this).val().length == decimals) {
      $('form.number').submit();
      $(this).val('');
    }
  });
});
