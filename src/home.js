import Icon from './assets/bacon-burger.png';

const homeLoader = () => {
  const mainpage = document.getElementById('mainpage');
  const home = document.createElement('div');

  home.classList.add('home');
  mainpage.appendChild(home);

  const hero = document.createElement('div');
  hero.classList.add('hero');
  home.appendChild(hero);
  hero.innerHTML = `
  <h1>Amazing Food</h1>
  <button>Submit</button>
  <p>Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip incididunt 
  Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip incididunt Lorem ipsum dolor sit amet, consectetur adip incididunt 
  Lorem ipsum dolor sit amet, consectetur adip incididunt</p>
  `;

  const foo = document.createElement('div');
  foo.classList.add('foo');
  home.appendChild(foo);
  const myIcon = new Image();
  myIcon.src = Icon;
  foo.appendChild(myIcon);
};

export default homeLoader;
