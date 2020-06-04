$('.header_main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.people_notes').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.people_face'
  });
  $('.people_face').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.people_notes',
    arrows: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });