$(document).ready(function(){

  // Select

  $('select').select2({width: 'resolve'})


  var quizCount = 1;
  var maxQuizCount = $('.quiz-item').length
  console.log(maxQuizCount)


  $('#quiz-next').on('click',function(){
    console.log(quizCount)
    if(quizCount >= maxQuizCount){
      alert('vseo')
    }
    else{
      var lastClass = 'quiz-process-' + quizCount;
      $('#quiz').removeClass()
      quizCount = quizCount + 1;
      var itemCount = quizCount - 1;
  

      $('#quiz').addClass('quiz-process-' + quizCount)
      $('.quiz-line__inner h6 span').removeClass('active')
      $('.quiz-line__inner h6 span').eq(itemCount).addClass('active')
      $('.quiz-item').removeClass('active')
      $('.quiz-item').eq(itemCount).addClass('active')
    
    }  

  })



})