$(document).ready(function(){

  var $revSlides = $('.reviews-slides');

  $revSlides.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  })


  $('.open-reviews').on('click',function(){

    var image = $(this).parent().prev().children('img').attr('src')
    var name = $(this).parent().children('h3.reviews-name').text();
    var trans = $(this).parent().children('span.transp-name').text();;
    var model = $(this).parent().children('span.model-name').text();
    var fullText = $(this).prev().text()

  
    $('#rev-pop__img').attr('src',image);
    $('#rev-pop__name').text(name)
    $('#rev-pop__trans').text(trans);
    $('#rev-pop__model').text(model)
    $('#rev-pop__text').text(fullText)
    

  })

})