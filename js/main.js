$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        swipe: false,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,    
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        Infinity: false,
        centerMode: true,
        centerPadding: '30% 0% 0%',
        slidesToScroll: 1,
        swipe: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        Infinity: false,
        centerMode: true,
        centerPadding: '50% 0% 0%',
        slidesToScroll: 1,
        swipe: true
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        Infinity: false,
        centerMode: true,
        centerPadding: '30% 0% 0%',
        slidesToScroll: 1,
        swipe: true
      }
    }
  ]
    });
    $('.slider-two').slick({
        slidesToShow: 3,
        arrows: true,
        swipe: false,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        swipe: true    
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        Infinity: false,
        centerMode: true,
        centerPadding: '20%',
        slidesToScroll: 1,
        swipe: true
      }
    }
  ]        
    });
    //видео с ютуба
    var playerOne;
        $('.about-content-video').on('click', function onYouTubeIframeAPIReady(){
            playerOne = new YT.Player('player-one', {
            width: '100%',
            videoId: 'lLmPo9nktlc',
            events: {
                'onReady': videoPlay
                
    }
        });
        
    });
    function videoPlay() {
            playerOne.videoPlay();
        }
        //валидация формы
    $(".form").validate({
  rules: {
    userName: "required",
    userPhone: "required"
      
  },
  messages: {
    userName: "Обязательно для заполнения",
    userPhone: {
      required: "Обязательно для заполнения",
    }
  }
});
//маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00');
     // плавные ссылки
        $('a[href^="#"]').click(function(){ // #1
    var anchor = $(this).attr('href');  // #2
    $('html, body').animate({           // #3
    scrollTop: $(anchor).offset().top  // #4
    }, 600);  
    });                          // #5
    
});
