var bmi = function(weight){
  return weight/3;
}


$(document).ready(function(){
  // console.log('Ready')
  $('#testbutton1').click(function () {
    $('#spanid1').text($('#weight'))
  })

  $('#testbutton2').click(function () {
    $('#spanid2').text(bmi(10))
  })

  $('#testbutton3').click(function () {
    $('#spanid3').text(bmi(10))
  })

  $('#testbutton4').click(function () {
    $('#spanid4').text(bmi(10))
  })
  
})
