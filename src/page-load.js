const pageLoad = (() => {
  const contentContainer = document.getElementById('content');
  const header = document.createElement('header');
  header.innerHTML = `
    <nav>
        <h2 class="logo">Nahid's Restaurant</h2>
        <ul class="nav">
            <li id="home">Home</li>
            <li id="menu">Menu</li>
            <li id="contact">Contact Us</li>
        </ul>
    </nav>`;
  contentContainer.appendChild(header);
  const mainpage = document.createElement('div');
  mainpage.id = 'mainpage';
  contentContainer.appendChild(mainpage);
  const checkModule = (() => {
    console.log('working with module');
  });
  return {
    checkModule,
  };
})();

export default pageLoad;
