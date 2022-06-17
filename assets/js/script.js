$(document).ready(function () {
  $('.carousel').slick({
    arrows: true,
    dots: true,
    slidesToShow: 5,
    autoplay: false,
    prevArrow: '<button class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64"><defs><filter id="Path_49023" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse"><feOffset input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="blur"/><feComposite in="SourceGraphic"/></filter></defs><g id="previous" transform="translate(-833 -5244)"> <g transform="matrix(1, 0, 0, 1, 833, 5244)" filter="url(#Path_49023)"><path id="Path_49023-2" data-name="Path 49023" d="M7,0H39a7,7,0,0,1,7,7V39a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z" transform="translate(9 9)" fill="#03a8f5"/> </g><g id="keyboard_tab_black_24dp" transform="translate(851 5263.915)"><path id="Path_48908" data-name="Path 48908" d="M25,0H0V25H25Z" transform="translate(2 0.085)" fill="none"/><path id="Path_48909" data-name="Path 48909" d="M3.76,7.719.031,11.458h19.76v2.083H.031l3.74,3.74L2.292,18.75l-6.25-6.25,6.25-6.25Z" transform="translate(6.958 -0.165)" fill="#e0e0e0"/></g></g></svg></button>',
    nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g id="next" transform="translate(-1012 -5253)"><rect id="Rectangle_618" data-name="Rectangle 618" width="46" height="46" rx="7" transform="translate(1012 5253)" fill="#03a8f5"/><g id="keyboard_tab_black_24dp" transform="translate(1026.958 5263.75)"><path id="Path_48909" data-name="Path 48909" d="M12.073,7.719l3.729,3.74H-3.958v2.083H15.8l-3.74,3.74,1.479,1.469,6.25-6.25-6.25-6.25Z" fill="#fff"/></g></g></svg></button>',
    centerMode: true,
    adaptiveHeight: false,
    asNavFor: '.industries-btn',
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,

        }

      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: false,
          variableWidth: true
        }

      }, {
        breakpoint: 1100,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          dots: false,
          variableWidth: true

        }
      }]
  });


  $('.industries-btn .slick-slide').eq(0).addClass('slick-active');
  $('.industries-btn').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.carousel',
    dots: false,
    arrows: false,
    infinite: false,
    draggable: false,
    focusOnSelect: true,
  });
});