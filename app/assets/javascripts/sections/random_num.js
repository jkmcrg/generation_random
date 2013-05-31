$(function () {
  $('input#number_number').keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
    }
  });
  $('input#number_number').keyup(function () {
    var nums = $(this).val().toString().replace(/\D/g,'');
    $(this).val(nums);
    var decimals = $('.decimals input[type=radio]:checked').val()
    if ($(this).val().length >= decimals) {
      n = Math.floor(nums.length/decimals);
      for(i = 0; i < n; i++) {
        var number = nums.substring(0, decimals);
        var nums   = nums.substring(decimals);
        $(this).val(number);
        $('form.number').submit();
        $(this).val(nums);
      }
    }
  });
});
