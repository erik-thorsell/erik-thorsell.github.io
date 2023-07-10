//define variables
zlist = ['aboutme', 'gdeskicon', 'terminalicon'];



window.addEventListener('load', () => {

    //hide the loader
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');



    //get all the taskbaricons
    const chromeIcon = document.getElementById("chromeicon");
    const terminalIcon = document.getElementById("terminalicon");
    const gDeskIcon = document.getElementById("gdeskicon");
    const closeChrome = document.getElementById("closechrome");
    const minimizeChrome = document.getElementById("minimizechrome");
    const closegDesk = document.getElementById("closegdesk");
    const minimizegDesk = document.getElementById("minimizegdesk");
    const closeTerminal = document.getElementById("closeterminal");
    const minimizeTerminal = document.getElementById("minimizeterminal");




    //change age to my age
    document.getElementById('age').innerHTML = calculateAge(12, 10, 2007);




    //initiate windows
    if (window.innerWidth <= 600) {
        //hide everything
        //document.getElementById('mobilehide').style.display = 'none';
        document.querySelectorAll('.mobilehide').forEach(e => e.style.display = 'none');
      } else {
      toggleElement('aboutme', 'close');
      zindex('aboutme');
      iconfocus('aboutme');
      document.getElementById('links').style.display = 'none';
      document.getElementById('whatiknow').style.display = 'none';
    }
    
    //drag the windows
    dragElement(document.getElementById("aboutme"));
    dragElement(document.getElementById("links"));
    dragElement(document.getElementById("whatiknow"));



    // add a click event listener to the each taskbaricon
    closeChrome.addEventListener("click", function() {
        toggleElement('aboutme', 'close');
        iconfocus('none')
    });
    minimizeChrome.addEventListener("click", function() {
        toggleElement('aboutme', 'minimize');
        iconfocus('none')
    });
    closegDesk.addEventListener("click", function() {
        toggleElement('links', 'close');
        iconfocus('none')
    });
    minimizegDesk.addEventListener("click", function() {
        toggleElement('links', 'minimize');
        iconfocus('none')
    });
    closeTerminal.addEventListener("click", function() {
        toggleElement('whatiknow', 'close');
        iconfocus('none')
    });
    minimizeTerminal.addEventListener("click", function() {
        toggleElement('whatiknow', 'minimize');
        iconfocus('none')
    });
    chromeIcon.addEventListener("click", function() {
        toggleElement('aboutme', 'close');
        zindex('aboutme');
        if (chromeIcon.style.top = '105%'){
          iconfocus('none')
        } else {
          iconfocus('aboutme')
        }
    });
    terminalIcon.addEventListener("click", function() {
        toggleElement('whatiknow', 'close');
        zindex('whatiknow');
        if (terminalIcon.style.top = '105%'){
          iconfocus('none')
        } else {
          iconfocus('whatiknow')
        }
    });
    gDeskIcon.addEventListener("click", function() {
        toggleElement('links', 'close');
        zindex('links');
        if (gDeskIcon.style.top = '105%'){
          iconfocus('none')
        } else {
          iconfocus('links')
        }
    });
});




//calculate my age
function calculateAge(birthMonth, birthDay, birthYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate(); 
    var calculatedAge = currentYear - birthYear;

    if (currentMonth < birthMonth - 1) {
        calculatedAge--;
    }
    if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
        calculatedAge--;
    }
    return calculatedAge;
}










//drag the windows
function dragElement(element) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
element.onmousedown = dragMouseDown;
function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    zindex(element.id)
    iconfocus(element.id)
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}
function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
}
function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
}
}





//all the iconfunctions
function toggleElement(id, type) {
    const element = document.getElementById(id);
    if (id == 'aboutme') {
        elementCircle = document.getElementById('chromecircle');
        elementIcon = document.getElementById('chromeicon');
        xy = '-50%'
    } else if (id == 'whatiknow') {
        elementCircle = document.getElementById('terminalcircle');
        elementIcon = document.getElementById('terminalicon');
        xy = '-45%'
    } else if (id == 'links') {
        elementCircle = document.getElementById('gdeskcircle');
        elementIcon = document.getElementById('gdeskicon');
        xy = '-55%'
    }
  
    if (element.style.display == 'none') {
      closeType = type;
      if (closeType == 'close') {
        element.style.display = 'flex';
        element.style.top = '50%';
        element.style.left = '50%';
        element.style.transform = `translate(${xy}, ${xy})`;
        elementCircle.style.top = '105%';
      } else if (closeType == 'minimize'){
        element.style.display = 'flex';
      }
    } else {
      switch (type) {
        case 'close':
          if (element.style.zIndex < 5) {
            zindex(id);
            return;
          }
          element.style.display = 'none';
          elementCircle.style.top = 'calc(100% + 10px)';
          break;
        case 'minimize':
          element.style.display = 'none';
          break;
        case 'maximize':
          // do stuff
          break;
      }
    }
    closeType = type;
  }





// z-index coverage
function zindex(element) {
    const valueToMove = element;
    const index = zlist.indexOf(valueToMove);
    if (index !== -1) {
        zlist.splice(index, 1);
    }
    zlist.unshift(valueToMove);
    for (let i = 0; i < zlist.length; i++) {
        document.getElementById(zlist[i]).style.zIndex = -i+5;
    }
}


// icon focus
function iconfocus(element) {
  chromeIcon = document.getElementById('chromeicon');
  terminalIcon = document.getElementById('terminalicon');
  gDeskIcon = document.getElementById('gdeskicon');
  switch (element) {
    case 'aboutme':
      chromeIcon.style.marginTop = '-5px';
      terminalIcon.style.marginTop = '0px';
      gDeskIcon.style.marginTop = '0px';
      break;
    case 'whatiknow':
      terminalIcon.style.marginTop = '-5px';
      gDeskIcon.style.marginTop = '0px';
      chromeIcon.style.marginTop = '0px';
      break;
    case 'links':
      chromeIcon.style.marginTop = '0px';
      terminalIcon.style.marginTop = '0px';
      gDeskIcon.style.marginTop = '-5px';
      break;
    case 'none':
      chromeIcon.style.marginTop = '0px';
      terminalIcon.style.marginTop = '0px';
      gDeskIcon.style.marginTop = '0px';
      break;
}
}





// mobile

// check if mobile
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 600) {
      const elementsToHide = document.querySelectorAll(".mobilehide");
      for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
      document.getElementById('mobile').style.display = 'flex';
      websiteLoader();
  }
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
  var text = document.getElementById('mobileage').innerText;
  text = text.replace('NaN', age);
  document.getElementById('mobileage').innerText = text;

  //on click hamburger menu
  document.getElementById('hamburgermenu').addEventListener('click', function(){
    const hamburgerlines = document.querySelectorAll('.hamburgerline');
    const landingpage = document.getElementById('mobilelanding');
    const themenu = document.getElementById('themenu');
    const itemlinks = document.querySelectorAll('.itemlink');
    const sourcecode = document.getElementById('sourcecode');
    const underlines = document.querySelectorAll('.underline');
    if(hamburgerlines[1].style.opacity == '1'){ //if the menu is closed
      hamburgerlines[0].style.transform = 'translateY(12px) rotate(-45deg)';
      hamburgerlines[1].style.opacity = '0';
      hamburgerlines[1].style.transform = 'translateX(-20px)';
      hamburgerlines[2].style.transform = 'translateY(-11px) rotate(45deg)';
      landingpage.style.opacity = '0';
      setTimeout(function(){
        landingpage.style.display = 'none';
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
        }, 400);
      }, 400);
    } else { //if the menu is opened
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
      setTimeout(function(){
        landingpage.style.display = 'flex';
        setTimeout(function(){
          landingpage.style.opacity = '1';
        }, 400);
      }, 300);
    }
  });
});