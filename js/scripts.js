$(function() {
  $(".clickable").click(function(){
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

$(function(){
  $(".fadein").click(function(){
    $(".catfade").fadeOut();
  });
});

$(function(){
  $("#clickme").click(function(){
    $("#textfade").fadeIn();
  });
});

// I want to make the bottom paragraph fade in when I click on the "I would be happy to tell you more..." link
