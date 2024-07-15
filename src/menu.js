
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
    }
];

function createMenuPage() {
    const header = document.createElement('h2');

    for (let element of menu) {
      const product = document.createElement('div');
      const image = document.createElement('img');
      image.src = '/pics/' + element.image;

      const productTitle = document.createElement('h3');
      productTitle.textContent = element.title;

      const describe = document.createElement('p');
      describe.textContent = element.desc;
    
      content.appendChild(product);
      product.appendChild(image);
      product.appendChild(productTitle);
      product.appendChild(describe);
    

    }
    console.log(menu[1]);
}

export { createMenuPage };