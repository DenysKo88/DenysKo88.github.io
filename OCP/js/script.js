$(document).ready(function(){
    $('.interface__carousel').slick({
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="/icons/3_section/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/icons/3_section/right.svg"></button>',
      responsive:[
        {
            breakpoint: 621,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 575,
            settings: {
                dots: false,
                arrows: false
            }
        }
        ]
    });
  });


const hamburger = document.querySelector('.main-header__hamburger'),
    menu = document.querySelector('.menu-adaptive'),
    closeElem = document.querySelector('.menu-adaptive__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    }); 

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
//for menu-adaptive
document.querySelectorAll(".menu__button-drop").forEach(button => {
    button.addEventListener('click', function(event) {
        document.querySelectorAll('.menu__item').forEach(item => {
            if (item.querySelector('.menu__button-drop') !== button) {
                item.classList.remove('menu__item_open');
            }
        })
        event._isClick == true

        button.parentElement.classList.toggle('menu__item_open');
    });
});

document.body.addEventListener('click', function(event) {
    console.log(event.target.parentElement.classList.contains('menu__item_open'));

    if (
        event._isClick == true ||
        event.target.classList.contains('menu__button-drop') == true ||
        event.target.classList.contains('dropdown-menu') == true
    ) return

    document.querySelectorAll('.menu__item').forEach(item => {
        item.classList.remove('menu__item_open');
    });
});

//for main-header__menu
document.querySelectorAll(".main-header__menu_button-drop").forEach(button => {
    button.addEventListener('click', function(event) {
        document.querySelectorAll('.main-header__menu_item').forEach(item => {
            if (item.querySelector('.main-header__menu_button-drop') !== button) {
                item.classList.remove('main-header__menu_item-open');
            }
        })
        event._isClick == true

        button.parentElement.classList.toggle('main-header__menu_item-open');
    });
});

document.body.addEventListener('click', function(event) {
    console.log(event.target.parentElement.classList.contains('main-header__menu_item-open'));

    if (
        event._isClick == true ||
        event.target.classList.contains('main-header__menu_button-drop') == true ||
        event.target.classList.contains('main-header__dropdown') == true
    ) return

    document.querySelectorAll('.main-header__menu_item').forEach(item => {
        item.classList.remove('main-header__menu_item-open');
    });
});
