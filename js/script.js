const menuItem = document.querySelectorAll('.nav-item');
const header = document.getElementById('header');
const menuBtn = document.getElementById('menu-btn');

const imagesControlButtons = document.querySelectorAll('.aboutus .container .left .buttons button');
const image = document.getElementById('image-selector');
const titleAboutUs = document.getElementById('title-aboutus');
const contentAboutUs = document.getElementById('content-aboutus');

const countElement = document.querySelectorAll('.count');

const brandFilterButtons = document.querySelectorAll('.filter-item');
const productCards = document.querySelectorAll('.products .box-container .box');

const productsBoxContainer = document.getElementById('products-box-container');

const phoneInput = document.getElementById('numero');

const aboutUsTexts = [
    {
        title: 'Quem somos?',
        content: 'A RealTi é uma empresa especializada na venda de servidores seminovos, que oferece uma ampla gama de produtos para ajudar empresas a otimizarem suas operações e alcançarem seus objetivos de negócios.'
    },
    {
        title: 'Nossa história',
        content: 'Com toda nossa experiência no mercado de servidores, nossa empresa tem se dedicado a oferecer produtos e serviços de alta qualidade e confiabilidade, comprometidos em atender as necessidades de cada cliente.'
    },
    {
        title: 'Produtos',
        content: 'Oferecemos servidores seminovos personalizáveis das marcas mais renomadas do mercado, como Dell, IBM e HP, além de uma ampla variedade de hardware e peças relacionadas a servidores, garantindo a qualidade dos nossos produtos.'
    },
    {
        title: 'Importação',
        content: 'Através da nossa rede de fornecedores internacionais, temos acesso a um canal exclusivo de importação de peças, o que nos possibilita fornecer as peças mais variadas e mais recentes do mercado em um tempo recorde.'
    }
]

menuItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        if (window.scrollY == 0) {
            header.classList.add('hover');
        }
    });
    item.addEventListener('mouseout', () => {
        header.classList.remove('hover');
    });
});

window.onscroll = () => {
    header.classList.remove('active');
    menuBtn.classList.remove('active');

    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

window.onload = () => {
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }

    if (brandFilterButtons.length > 0) {
        const displayStyle = window.getComputedStyle(brandFilterButtons[0]).display;

        if (displayStyle != 'none') {
            brandFilterButtons[0].classList.add('active');
        } else {
            brandFilterButtons[1].classList.add('active');

            productCards.forEach((card) => {
                const brand = card.getAttribute('data-brand');
                if (brand != 'dell') {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'flex';
                }
            })
        }
    }

    const rect = countElement[0].getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight - rect.height;

    if (inViewport) {
        countElement.forEach((e, index) => {
            e.classList.add('visible');

            switch (index) {
                case 0:
                    animateCount(e, 30, 1000);
                    break;
                case 1:
                    animateCount(e, 200, 1000);
                    break;
                case 2:
                    animateCount(e, 100, 1000);
                    break;
                default:
                    break;
            }
        })
    }
}

menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('active')) {
        header.classList.remove('active');
        menuBtn.classList.remove('active');
    } else {
        header.classList.add('active');
        menuBtn.classList.add('active');
    }
});

Array.from(imagesControlButtons).forEach((button, index) => {
    button.onclick = () => {
        if (!button.classList.contains('active')) {

            let src = 'images/business' + (index + 1) + '.jpg';

            image.style.opacity = 0;

            setTimeout(function () {
                image.setAttribute('src', src);
            }, 200);

            titleAboutUs.style.opacity = 0;
            contentAboutUs.style.opacity = 0;

            setTimeout(function () {
                switch (index) {
                    case 0:
                        titleAboutUs.textContent = aboutUsTexts[0].title;
                        contentAboutUs.textContent = aboutUsTexts[0].content;
                        break;
                    case 1:
                        titleAboutUs.textContent = aboutUsTexts[1].title;
                        contentAboutUs.textContent = aboutUsTexts[1].content;
                        break;
                    case 2:
                        titleAboutUs.textContent = aboutUsTexts[2].title;
                        contentAboutUs.textContent = aboutUsTexts[2].content;
                        break;
                    case 3:
                        titleAboutUs.textContent = aboutUsTexts[3].title;
                        contentAboutUs.textContent = aboutUsTexts[3].content;
                        break;
                    default:
                        break;
                }
                titleAboutUs.style.opacity = 1;
                contentAboutUs.style.opacity = 1;
            }, 200);

            button.classList.add('active');

            switch (index) {
                case 0:
                    imagesControlButtons[1].classList.remove('active');
                    imagesControlButtons[2].classList.remove('active');
                    imagesControlButtons[3].classList.remove('active');
                    break;
                case 1:
                    imagesControlButtons[0].classList.remove('active');
                    imagesControlButtons[2].classList.remove('active');
                    imagesControlButtons[3].classList.remove('active');
                    break;
                case 2:
                    imagesControlButtons[0].classList.remove('active');
                    imagesControlButtons[1].classList.remove('active');
                    imagesControlButtons[3].classList.remove('active');
                    break;
                case 3:
                    imagesControlButtons[0].classList.remove('active');
                    imagesControlButtons[1].classList.remove('active');
                    imagesControlButtons[2].classList.remove('active');
                    break;
                default:
                    break;
            }
        }
    }
});

image.addEventListener('load', () => {
    image.style.opacity = 1;
});

function animateCount(element, endValue, interval) {
    let startValue = 0;
    const duration = Math.floor(interval / endValue);
    const counter = setInterval(function () {
        startValue++;
        element.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
}

function handleScroll() {
    const rect = countElement[0].getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight - rect.height;
    if (inViewport) {
        countElement.forEach((e, index) => {
            e.classList.add('visible');

            switch (index) {
                case 0:
                    animateCount(e, 30, 1000);
                    break;
                case 1:
                    animateCount(e, 200, 1000);
                    break;
                case 2:
                    animateCount(e, 100, 1000);
                    break;
                default:
                    break;
            }
        })
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

Array.from(brandFilterButtons).forEach((button, index) => {
    button.onclick = () => {
        if (!(button.classList.contains('active'))) {
            button.classList.add('active');

            productsBoxContainer.style.opacity = 0;

            Array.from(brandFilterButtons).forEach((button, indexChildren) => {
                if (index != indexChildren) {
                    button.classList.remove('active');
                }
            });

            const filterBrand = button.getAttribute('data-brand');

            setTimeout(() => {
                productCards.forEach((card, index) => {
                    const brand = card.getAttribute('data-brand');
                    if (filterBrand != 'all' && brand != filterBrand) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'flex';
                    }
                    if (index === productCards.length - 1) {
                        productsBoxContainer.style.opacity = 1;
                    }
                })
            }, 300)
        }
    }
});

phoneInput.addEventListener('input', () => {
    let phoneValue = phoneInput.value;

    phoneValue = phoneValue.replace(/\D/g, '');

    if (phoneValue.length <= 10) {
        phoneValue = phoneValue.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else {
        phoneValue = phoneValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }

    phoneInput.value = phoneValue;
});