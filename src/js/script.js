if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        // autoHeight: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
            }
        }
    });
}

if (document.querySelector('.news__switcher')) {
    document.querySelector('.news__switcher').querySelectorAll('p').forEach((el) => {
        el.onclick = () => {
            el.classList.add('active');

            document.querySelector('.news__switcher').querySelectorAll('.active').forEach((p) => {
                if (p !== el) {
                    p.classList.remove('active');
                }
            })

            document.querySelector("." + el.id).classList.add('active');

            document.querySelectorAll('.news__container ').forEach((container) => {
                if (!container.classList.contains(el.id)) {
                    container.classList.remove('active');
                }
            })
        }
    })
}

if (document.querySelector('.hidden-content')) {
    document.querySelectorAll('.hidden-content').forEach((content) => {
        content.querySelector('.text-button').querySelectorAll('span')[0].addEventListener('click', () => {
            content.querySelector('.hidden-text').classList.add('active');
            content.querySelector('.text-button').querySelectorAll('span')[0].classList.remove('active');
            content.querySelector('.text-button').querySelectorAll('span')[1].classList.add('active');
        })

        content.querySelector('.text-button').querySelectorAll('span')[1].addEventListener('click', () => {
            content.querySelector('.hidden-text').classList.remove('active');
            content.querySelector('.text-button').querySelectorAll('span')[1].classList.remove('active');
            content.querySelector('.text-button').querySelectorAll('span')[0].classList.add('active');
        })
    })
}

if (document.querySelector('.important__accordion')) {
    document.querySelectorAll('.important__accordion').forEach((accordion) => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
        })
    })
}

if(document.querySelector('.appointment__tabs')) {
    document.querySelectorAll('.appointment__tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            document.querySelector('.appointment__tab.active').classList.remove('active')
            tab.classList.add('active')

            document.querySelector('.appointment__content.active').classList.remove('active')
            document.querySelector('.js-' + tab.dataset.tab).classList.add('active')
        })
    })
}
