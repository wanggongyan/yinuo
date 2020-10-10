
define(['jquery'], function ($) {

  $(".headabc").mouseover(function(){
    $(".son").css({
      "display" : "block",
    });
  });
  
  $(".headabc").mouseleave(function(){
    $(".son").css({
      "display" : "none",
    });
  });

  return {
    body: body
  }
})