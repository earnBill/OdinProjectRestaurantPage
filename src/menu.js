
const content = document.querySelector('#content');

const menu = [ 
    {  
        title: 'Classic',
        image: 'classicBurger.jpg',
        desc: 'Traditional beef burger with lettuce, tomato, and cheese.'
    },
    {
        title: 'BBQ',
        image: 'bbqBurger.jpg',
        desc: 'Beef burger with smoky BBQ sauce and crispy onions.'  
    },
    {
        title: 'Mushroom',
        image: 'mushroomBurger.jfif',
        desc: 'Juicy beef burger topped with sautéed mushrooms and Swiss cheese.'
    },
    {
        title: 'Spicy',
        image: 'spicyBurger.jpg',
        desc: 'Spicy beef burger with jalapeños and pepper jack cheese.'
    },
    {
        title: 'Veggie',
        image: 'VeggieBurger.jpg',
        desc: 'Delicious veggie patty with fresh greens and avocado.'
    },
    {
        title: 'Bacon',
        image: 'baconBurger.jpg',
        desc: 'Beef burger loaded with crispy bacon and cheddar cheese.'
    }
];



function createMenuPage() {     
    const mainHeader = document.createElement('h1');
    mainHeader.textContent = 'Our Burgers';
    content.appendChild(mainHeader);

    const header = document.createElement('h2');
    const container = document.createElement('div');
    container.className = 'container';
    content.appendChild(container);


    for (let element of menu) {
      const product = document.createElement('div');
      product.className = 'product';

      const image = document.createElement('img');
      image.className = 'product-image';
      image.src = '/pics/' + element.image;

      const productTitle = document.createElement('h3');
      productTitle.className = 'product-title';
      productTitle.textContent = element.title;

      const describe = document.createElement('p');
      describe.className = 'product-describe';
      describe.textContent = element.desc;
    
      container.appendChild(product);
      product.appendChild(image);
      product.appendChild(productTitle);
      product.appendChild(describe);
    

    }
    console.log(menu[1]);
}

export { createMenuPage };