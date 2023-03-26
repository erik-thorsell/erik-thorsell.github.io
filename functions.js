//THINGS TO DO
// - add a function to the taskbaricons to have the one with the highest z-index be slightly above the others
// - add the circles to the remaining taskbaricons
// - make you not need to click the icons 3 times the first time you want to open them
// - make the interior for the whatiknow window
// - make the interior for the links window
// - resize windows

// MAYBE
// - maximize the window using the maximize button
// - when you drag one to the side of the screen and your mouse touches the side an 
//   overlay animation will play and if you release it there it will take up half of the screen.


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




    //change age to my age
    document.getElementById('age').innerHTML = calculateAge(12, 10, 2007);




    //drag the windows
    dragElement(document.getElementById("aboutme"));
    dragElement(document.getElementById("links"));
    dragElement(document.getElementById("whatiknow"));



    // add a click event listener to the each taskbaricon
    closeChrome.addEventListener("click", function() {
        toggleElement('aboutme', 'close');
    });
    minimizeChrome.addEventListener("click", function() {
        toggleElement('aboutme', 'minimize');
    });
    chromeIcon.addEventListener("click", function() {
        toggleElement('aboutme', 'close');
        zindex('aboutme');
    });
    terminalIcon.addEventListener("click", function() {
        toggleElement('whatiknow', 'close');
        zindex('whatiknow');
    });
    gDeskIcon.addEventListener("click", function() {
        toggleElement('links', 'close');
        zindex('links');
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





// check if mobile
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 600) {
        const elementsToHide = document.querySelectorAll(".mobilehide");
        for (let i = 0; i < elementsToHide.length; i++) {
          elementsToHide[i].style.display = "none";
        }
      document.getElementById('mobile').style.display = 'flex';
    }
  });
  




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
    } else if (id == 'whatiknow') {
        elementCircle = document.getElementById('terminalcircle');
    } else if (id == 'links') {
        elementCircle = document.getElementById('gdeskcircle');
    }
  
    if (element.style.display == 'none') {
      closeType = type;
      if (closeType == 'close') {
        element.style.display = 'flex';
        element.style.top = '50%';
        element.style.left = '50%';
        element.style.transform = 'translate(-50%, -50%)';
        elementCircle.style.top = '100%';
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