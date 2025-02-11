$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) 
            {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  const navBar = document.querySelector('#nav-bar');

  navBar.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'A') {
      const href = target.getAttribute('href');
      window.location.href = href;
    }
  });

  const educationButton = document.querySelector('#education-button');

educationButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'edu.html';
});

const skillsButton = document.querySelector('#skills-button');

skillsButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'skills.html';
});

const aboutButton = document.querySelector('#about-button');

aboutButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'CV.html';
});

const emailLink = document.querySelector('#email-link');

emailLink.addEventListener('click', function(event) {
  event.preventDefault();
  const email = 'your-email@example.com';
  const subject = 'Your Subject';
  const body = 'Your message body';
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

navToggle.addEventListener('click', function() {
  navMenu.classList.toggle('open');
  navMenu.classList.add('stay-open');
});

