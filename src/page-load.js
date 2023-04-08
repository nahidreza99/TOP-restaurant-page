const pageLoad = (() => {
  const contentContainer = document.getElementById('content');
  const header = document.createElement('header');
  header.innerHTML = `
    <nav>
        <h2 class="logo">Nahid's Restaurant</h2>
        <ul class="nav">
            <li id="home">Home</li>
            <li id="menu">Meny</li>
            <li id="contact">Contact Us</li>
        </ul>
    </nav>`;
  contentContainer.appendChild(header);
})();
