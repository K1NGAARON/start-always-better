function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');

};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});

function createLogos() {
    const logos = [
        {
            img: '/member-trial/img/logos/logo1.svg',
        },
        {
            img: '/member-trial/img/logos/logo2.svg',
        },
        {
            img: '/member-trial/img/logos/logo3.svg',
        },
        {
            img: '/member-trial/img/logos/logo4.svg',
        },
        {
            img: '/member-trial/img/logos/logo5.svg',
        },
    ];

    const target = document.querySelector('#social-proof');

    if (target) {
        shuffleArray(logos);
        for (let i = 0; i < 6; i++) {
            const template = `
                <div class="item">
                    <img src="${logos[i].img}" alt="Always better in de pers">
                </div>
            `;
            target.insertAdjacentHTML("beforeend", template);
        };
    }
};

// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');

    if ($(this).scrollTop() > header.height()) {
        header.addClass('active');
    } else {
        header.removeClass('active');
    }
});

// SMALL MENU
$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

$('.small-menu-content .nav').click(closeMenu);