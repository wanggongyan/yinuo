define(['jquery'], function ($) {
      function body() {
 
      }
// 放大镜
    $(function(){
      $("#small").mouseenter(function(){
        $("#mark,#big").show();
      }).mouseleave(function(){
        $("#mark,#big").hide();
      }).mousemove(function(ev){
        var l = ev.clientX - $(this).offset().left - 100;
        var t = ev.clientY - $(this).offset().top - 100;
        //限制出界
        l = Math.max(0, l);
        l = Math.min(300, l);
        t = Math.max(0, t);
        t = Math.min(529, t);

        $("#mark").css({
          left: l,
          top: t
        })
        $("#big img").css({
          left: -2 * l,
          top: -2 * t
        })
      })
    })


      return {
        body: body
      }
    
})