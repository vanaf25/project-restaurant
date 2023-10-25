new Swiper('.image-slider',{
    slidesPerView:'auto',
    slidesPerGroup:3,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable: true,

    },

    speed:1100,
    breakpoints:{
        768:{
            direction:'horizontal',
            autoplay:{
                delay:5000,
                stopOnLastSlide:false,
                disableOnInteraction:false
            },
            simulateTouch:false,
        }
    },
    autoplay:{
delay:4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,

    },
    simulateTouch:false,
    direction: 'vertical'
});