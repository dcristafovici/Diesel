$(document).ready(function(){

  if(window.innerWidth > 480){
    $('.offer-item__text').equalHeights()
    $('.contract-item__title').equalHeights()
    $('.offer-item__title').equalHeights()
  }

  $("input[type='tel']").inputmask("+7 (999) 999-99-99");
})