$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        responsive : {
            0 : {
                items: 1,
                stagePadding: 70,
            },
            601 : {
                items: 1,
            },
            1001 : {
                items: 2,
            },

            1601 : {
                items: 3,
            }
        }
    });
  });



  const videoBtn = document.querySelector('.video__btn');
  const videoPicture = document.querySelector('.video__preview');
  const video = document.querySelector('.video__object');

  videoBtn.addEventListener('click', function(){
    videoPicture.classList.add('none');
    videoBtn.classList.add('none');

    if(video.paused){
        video.play();
    }
  });

  video.addEventListener('click', function(){
    if(video.paused){
        video.play();
    } else{
        videoBtn.classList.remove('none');
        video.pause()
    }

  });



  const btnOpen = document.querySelector('#openNav');
  const mobileNav = document.querySelector('.mobile-nav')
  const btnClose = document.querySelector('#closeNav');

  btnOpen.onclick = function(){
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll');
  }

  btnClose.onclick = function(){
    mobileNav.classList.add('none')
    document.body.classList.remove('no-scroll');
  }