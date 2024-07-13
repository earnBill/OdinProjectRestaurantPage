const msg = () => console.log('home');
const content = document.querySelector('#content');

function createHomePage () {
  const image = document.createElement('img');
  const para = document.createElement('p');
  const h1 = document.createElement('h1');

  image.src = '/pics/homeBurger.jpg';
  image.classList.add('home-image');
  console.log('create Homepage');
  
  h1.textContent = 'The best burgers in town';
  h1.className = 'homeHeader';
  para.textContent = 'Delves into the Joy of Burger Craftsmanship, Inspiring Enthusiasts to Savor the Complex Flavors and Rich Aromas in Every Bite.';
  para.className = 'homeText';

  content.appendChild(image);
  content.appendChild(h1);
  content.appendChild(para);
}



export {msg, createHomePage};