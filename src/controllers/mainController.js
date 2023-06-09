const products = [
    {
        img: 'images/img-cafetera-moulinex.jpg',
        alt: 'imagen de cafetera moulinex',
        title: 'Cafetera Moulinex',
        price: '6.770',
        discount: 40,
    },
    {
        img: 'images/img-macbook-pro-2019.jpg',
        alt: 'imagen de MacBook pro 2019',
        title: 'MacBook Pro 2019',
        price: '230.000',
        discount: 20,
    },
    {
        img: 'images/img-samsung-galaxy-s10.jpg',
        alt: 'imagen de Samsung Galaxy S10',
        title: 'Samsung Galaxy S10',
        price: '70.500',
        discount: 10,
    },
    {
        img: 'images/img-tv-samsung-smart.jpg',
        alt: 'imagen de Samsung Smart TV de 43"',
        title: 'Smart Tv Samsung 43"',
        price: '23.200',
        discount: 5,
    }
];

const mainSections = [{title: 'Basado en tu última visita'}, {title: 'Ofertas'}];

const footerSections = [{
        class: 'fa-credit-card',
        title: 'Pagá con tarjeta o en efectivo',
        description: 'Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!'
    },
    {
        class: 'fa-gift',
        title: 'Envío gratis desde $ 2.500',
        description: 'Solo por estar registrad@ en Mercado Liebre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.'

    },
    {
        class: 'fa-user-shield',
        title: 'Seguridad, de principio a fin',
        description: '¿No te gusta? ¡Devolvelo! En Mercado Liebre, no hay nada que no puedas hacer, porque estás siempre protegid@.'
    }
];

module.exports = {
    index:  (req, res) => res.render('home.ejs', {products: products, sections: mainSections, footer: footerSections}),
    login: (req, res) => res.render('login.ejs'),
    register: (req, res) => res.render('register.ejs')
};