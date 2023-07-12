colors = {
    'html': 'invert(46%) sepia(34%) saturate(1814%) hue-rotate(340deg) brightness(97%) contrast(94%)',
    'css': 'invert(61%) sepia(25%) saturate(1351%) hue-rotate(156deg) brightness(90%) contrast(94%)',
    'js': 'invert(80%) sepia(88%) saturate(424%) hue-rotate(342deg) brightness(101%) contrast(95%)',
    'python': 'invert(39%) sepia(28%) saturate(1037%) hue-rotate(164deg) brightness(99%) contrast(89%)',
    'git': 'invert(38%) sepia(92%) saturate(2257%) hue-rotate(343deg) brightness(101%) contrast(91%)',
    'sql': 'invert(79%) sepia(4%) saturate(5862%) hue-rotate(170deg) brightness(95%) contrast(96%)'
  }

window.addEventListener('load', () => {

    //hide the loader
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
    document.getElementById('mobile').style.display = 'flex';
    websiteLoader();
});


//messages
function greetMessage(element, message, timeout = NaN) {
    element.style.opacity = '0';
    element.style.display = 'flex';
    if (message != false) {
      element.innerHTML = message;
    }
    setTimeout(function(){
      element.style.opacity = '1';
    }, 1000);
    if (timeout != NaN) {
      setTimeout(function(){
        element.style.opacity = '0';
      }, timeout);
  }
  }
  
  
  //website loader
  function websiteLoader() {
    setTimeout(function(){
      const navtitle = document.getElementById('navtitle');
      const p1 = document.getElementById('p1');
      const p3 = document.getElementById('p3');
      const landing = document.getElementById('mobilelandingcontent');
  
      //navtitle animation
      document.getElementById('nav').style.display = 'flex';
      greetMessage(navtitle, false);
      setTimeout(function(){
        //removes the "I'm"
        p1.style.transform = 'translateX(-25px)';
        p1.style.opacity = '0';
        setTimeout(function(){
          //removes the period
          p3.style.transform = 'translateX(25px)';
          p3.style.opacity = '0';
        }, 300);
        setTimeout(function(){
          //centers the text
          navtitle.style.marginRight = '45px';
          setTimeout(function(){
            //shrinks the navbar so that the text is at the top
            document.getElementById('nav').style.height = '10%';
            setTimeout(function(){
              //animates and creates the divider
              document.getElementById('navdivider').style.width = '100%';
              landing.style.opacity = '1';
              //animates and creates the hamburger menu
              const hamburgerlines = document.querySelectorAll('.hamburgerline');
              for (let i = 0; i < hamburgerlines.length; i++) {
                setTimeout(function(){
                  hamburgerlines[i].style.transform = 'translateY(-10px)';
                  setTimeout(function(){
                    hamburgerlines[i].style.opacity = '1';
                    hamburgerlines[i].style.transform = 'translateY(0px)';
                  }, 200);
                }, 100 * i);
              }
            }, 300);
          }, 600);
        }, 500);
      }, 1500);
  
    }, 500);
  }
  
  
  //eventlistener click hamburger menu
  document.addEventListener('DOMContentLoaded', function(){
    //correct age
    const age = calculateAge(12, 10, 2007);
    elements = document.querySelectorAll('.agereplace');
    for (let i = 0; i < elements.length; i++) {
      var text = elements[i].innerText;
      text = text.replace('NaN', age);
      elements[i].innerText = text;
    }
  
    //on click hamburger menu
    document.getElementById('hamburgermenu').addEventListener('click', function(){
      const hamburgerlines = document.querySelectorAll('.hamburgerline');
      if(hamburgerlines[1].style.opacity == '1'){ //if the menu is closed
        openMenu();
      } else { //if the menu is opened
        closeMenu();
  }});
  })
  
  function openMenu() {
    const hamburgerlines = document.querySelectorAll('.hamburgerline');
    const menuhides = document.querySelectorAll('.menuhide');
    const themenu = document.getElementById('themenu');
    const itemlinks = document.querySelectorAll('.itemlink');
    const sourcecode = document.getElementById('sourcecode');
    const underlines = document.querySelectorAll('.underline');
    if(hamburgerlines[1].style.opacity == '1'){ //if the menu is closed
      hamburgerlines[0].style.transform = 'translateY(12px) rotate(-45deg)';
      hamburgerlines[1].style.opacity = '0';
      hamburgerlines[1].style.transform = 'translateX(-20px)';
      hamburgerlines[2].style.transform = 'translateY(-11px) rotate(45deg)';
      for (let i = 0; i < menuhides.length; i++) {
        menuhides[i].style.opacity = 0;
      }
      setTimeout(function(){
        for (let i = 0; i < menuhides.length; i++) {
          menuhides[i].style.display = 'none';
        }
      }, 400);
      setTimeout(function(){
        themenu.style.display = 'flex';
        themenu.style.opacity = '1';
        setTimeout(function(){
          for (let i = 0; i < itemlinks.length; i++) {
            setTimeout(function(){
              itemlinks[i].style.opacity = '1';
              underlines[i].style.width = '90%';
            }, 100 * i);
          }
          sourcecode.style.opacity = '1';
        }, 300);
      }, 400);
    }
  }
  
  function closeMenu() {
    const hamburgerlines = document.querySelectorAll('.hamburgerline');
    const menuhides = document.querySelectorAll('.menuhide');
    const themenu = document.getElementById('themenu');
    const itemlinks = document.querySelectorAll('.itemlink');
    const sourcecode = document.getElementById('sourcecode');
    const underlines = document.querySelectorAll('.underline');
    hamburgerlines[0].style.transform = 'translateY(0px) rotate(0deg)';
    hamburgerlines[1].style.opacity = '1';
    hamburgerlines[1].style.transform = 'translateX(0px)';
    hamburgerlines[2].style.transform = 'translateY(0px) rotate(0deg)';
    themenu.style.opacity = '0';
    setTimeout(function(){
      themenu.style.display = 'none';
    }
    , 300);
    // do the same thing as above but in reverse
    for (let i = 0; i < itemlinks.length; i++) {
      itemlinks[i].style.opacity = '0';
      underlines[i].style.width = '0%';
    }
    sourcecode.style.opacity = '0';
    for (let i = 0; i < menuhides.length; i++){menuhides[i].style.display = 'flex';}
    setTimeout(function(){
      for (let i = 0; i < menuhides.length; i++) {
        setTimeout(function(){
          menuhides[i].style.opacity = '1';
        }, 100 * i);
      }
    }, 300);
  }
  
  //all of the links in the menu
  document.addEventListener('DOMContentLoaded', function(){
    const itemlinks = document.querySelectorAll('.itemlink');
    const card = document.querySelector('.mobileaboutprojects');
    for (let i = 0; i < itemlinks.length; i++) {
      itemlinks[i].addEventListener('click', function(){
        const attribute = itemlinks[i].getAttribute('destination');
        closeMenu();
        setTimeout(function(){
          window.location.href = attribute;
          if (attribute == '#arrow') {
            const secattribute = itemlinks[i].getAttribute('secdestination');
            if (secattribute == 'aboutme') {
              card.classList.remove('is-flipped');
            } else if (secattribute == 'projects') {
              card.classList.add('is-flipped');
            }
          }
        }, 600);
      });
    }
  });
  
  
  //if the user is at the top of the page, the arrow is visible, otherwise it is hidden
  document.addEventListener('DOMContentLoaded', function(){
    const arrow = document.getElementById('arrow');
    window.addEventListener('scroll', function(){
      if (window.scrollY > 0) {
        arrow.style.opacity = '0';
      } else {
        arrow.style.opacity = '1';
      }
    });
  });
  
  //aboutme-projects cards click
  document.addEventListener('DOMContentLoaded', function(){
    const card = document.querySelector('.mobileaboutprojects');
    const cardlinks = document.querySelectorAll('.projectcard');
  
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
    for (let i = 0; i < cardlinks.length; i++) {
      cardlinks[i].addEventListener('click', function () {
        window.open(cardlinks[i].getAttribute('destination'), '_blank');
        card.classList.toggle('is-flipped');
      });
    }
  });
  
  //if the user clicks the card, it gets vibrant with colors
  document.addEventListener('DOMContentLoaded', function(){
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function(){
        cards[i].style.transform = 'scale(1.05)';
        setTimeout(function(){
          attribute = cards[i].getAttribute('type');
          cards[i].style.filter = colors[attribute];
          setTimeout(function(){
            cards[i].style.transform = 'scale(1)';
          }, 400);
        }, 200);
      });
    }
  });