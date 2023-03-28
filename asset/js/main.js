$(document).ready(function () {
  // 헤더 스크롤
  $(window).scroll(function () {
    current = $(this).scrollTop();

    if (current > 0) {
      $('.header').addClass('bg');

    } else {
      $('.header').removeClass('bg');
    }
  })

  $(window).trigger('scroll');


  // 슬라이드
  const mainSlide = new Swiper(".sc-visual .main-slide", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });


  const banner = new Swiper(".banner-swiper", {
    centeredSlide: true,
    slidesPerView: 'auto',
  });


  const next = new Swiper(".next-slide", {
    loop: true,
    centeredSlide: true,
    slidesPerView: 'auto',
  });

  /* $('.lang-box').click(function(e){
    $(this).addClass('active');
  }); */


  // 모바일 메뉴 클릭
  $('.mobile-btn').click(function () {
    $('.gnb-wrap').addClass('open');
    $(this).css("display", "none");
    $('.mobile-close').css("display", "block");
  })

  $('.mobile-close').click(function () {
    $('.gnb-wrap').removeClass('open');
    $(this).css("display", "none");
    $('.mobile-btn').css("display", "block");
  })



  // 다가올 날짜
  function diffDay(frame, day) {
    const masTime = new Date(day);
    const todayTime = new Date();
    const diff = masTime - todayTime;
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);

    // console.log(`${diffDay} ,,, ${diffHour} ,, ${diffMin} ,,,${diffSec}`);

    const html = `<span class="time">${diffHour}</span> :
                    <span class="time">${diffMin}</span> :
                    <span class="time">${diffSec}</span>`;
    $(frame).html(html);
  }

  setInterval(() => {
    diffDay('#time01', "2023-02-11");
    diffDay('#time02', "2023-02-12");
  }, 1000);
})
