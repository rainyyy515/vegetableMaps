$(function () {
  console.log('Hello Bootstrap5');
  $('.nav-link').click(function (e) {
    $(this).toggleClass('focus');
    $(this).parent().siblings().find('.nav-link').removeClass('focus');
  });
  //輪播
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });


  let map,infoWindow;

  function initMap() {
    //導入maps
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 22.579741781811244, lng: 120.32260202023902 },
      zoom: 13,
    });
    //標記的 Google 地圖添加
    const uluru = {lat:22.579008191337223 ,lng:120.32207265939651};
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

});
