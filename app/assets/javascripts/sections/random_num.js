$(function () {
  $('input#number_number').keyup(function () {
    var decimals = $('.decimals input[type=radio]:checked').val()
    if ($(this).val().length >= decimals) {
      var nums = $(this).val().toString();
      n = Math.ceil(nums.length/decimals);
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
