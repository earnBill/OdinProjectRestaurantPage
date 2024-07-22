import location from './pics/location.png';


const content = document.querySelector('#content');

function createAboutPage() {
    console.log('about page')
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'about-container';
    
    const header = document.createElement('h1');
    header.textContent = 'About Us:';

    const para = document.createElement('p');
    para.textContent = 'Welcome to Burger Haven, your go-to spot for delicious, gourmet burgers made with the finest ingredients. Located in the heart of the city, we offer a range of burgers to satisfy every taste. Our menu features the classic Classic burger with fresh lettuce, tomato, and cheese, the smoky BBQ burger with crispy onions, the rich Mushroom burger with sautéed mushrooms and Swiss cheese, the bold Spicy burger with jalapeños and pepper jack cheese, the wholesome Veggie burger with fresh greens and avocado, and the indulgent Bacon burger with crispy bacon and melted cheddar. At Burger Haven, we pride ourselves on providing a warm and welcoming atmosphere for friends and families to enjoy great meals together.'

    const image = document.createElement('img');
    image.src = location;

    const ul = document.createElement('ul');

    let infos = ['Address: 123 Burger Lane, Food City',
                 'Phone: (123) 456-7890',
                 'Email: info@burgerhaven.com'
                ];

    for (let info of infos) {
        const li = document.createElement('li');
        li.textContent = info;
        ul.appendChild(li);
    }

    const finalPara = document.createElement('p');
    finalPara.textContent = `Join us at Burger Haven and experience the joy of exceptional burgers. We can't wait to serve you!`;
    
    aboutContainer.append(header, para, image, ul, finalPara);
    content.appendChild(aboutContainer);

}

export { createAboutPage};