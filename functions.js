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
        document.getElementById('aboutme').style.display = 'none';
        document.getElementById('links').style.display = 'none';
        document.getElementById('whatiknow').style.display = 'none';
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