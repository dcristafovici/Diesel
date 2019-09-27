$(document).ready(function(){



  $('.price-cell__link a').on('click',function(){

    var title = $(this).data('title')
    $("#popup-model .popup-title span").text(title)
    
  })


})