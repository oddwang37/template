$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
});

$('.modal__close').on('click', function() {
    $('.modal, .overlay').fadeOut();
});

$('.catalog-item__btn').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
});

$('#consultation-form').validate({
    rules: {
        first_name: "required",
        phone: "required",
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        first_name: "Пожалуйста, введите ваше имя",
        phone:"Пожалуйста, корректно введите номер вашего телефона",
        email: {
            required:"Для контакта с вами необходим ваш e-mail адрес",
            email: "Адрес вашей электронной почты должен содержать знак @",
        },
    },
});
$('#order form').validate({
    rules: {
        first_name: "required",
        phone: "required",
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        first_name: "Пожалуйста, введите ваше имя",
        phone:"Пожалуйста, корректно введите номер вашего телефона",
        email: {
            required:"Для контакта с вами необходим ваш e-mail адрес",
            email: "Адрес вашей электронной почты должен содержать знак @",
        },
    },
});

$('#consultation form').validate({
    rules: {
        first_name: "required",
        phone: "required",
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        first_name: "Пожалуйста, введите ваше имя",
        phone:"Пожалуйста, корректно введите номер вашего телефона",
        email: {
            required:"Для контакта с вами необходим ваш e-mail адрес",
            email: "Адрес вашей электронной почты должен содержать знак @",
        },
    },
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('.up-area').fadeIn('slow');
    } else {
        $('.up-area').fadeOut('slow');
    }
});

$("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();
