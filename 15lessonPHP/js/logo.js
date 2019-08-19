
  function resizeScrenn(){
          if ($(window).width() < 768){
           
            $(".header-logo> a").hide();
          } else {$(".header-logo> a").show();}
        }
        resizeScrenn();
        $(window).resize(function(){
          resizeScrenn();
        });
