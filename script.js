const navLinks = document.querySelector('.nav-links');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
  });
  $(document).ready(function(){
    $(".nav-tabs a").click(function(){
      $(this).tab('show');
    });
  });