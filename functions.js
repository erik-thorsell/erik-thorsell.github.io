window.addEventListener('load', () => {
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


    // add a click event listener to the each taskbaricon
    closeChrome.addEventListener("click", function() {
        chrome('close');
    });
    minimizeChrome.addEventListener("click", function() {
        chrome('minimize');
    });
    chromeIcon.addEventListener("click", function() {
        chrome('close');
    });
    terminalIcon.addEventListener("click", function() {
        console.log("Button clicked!");
    });
    gDeskIcon.addEventListener("click", function() {
        console.log("Button clicked!");
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
function chrome(type) {
    const aboutMe = document.getElementById('aboutme');
    const chromeCircle = document.getElementById('chromecircle');
    if (aboutMe.style.display == 'none') {
        if (closeType == 'close') {
            aboutMe.style.display = 'flex';
            aboutMe.style.top = '50%';
            aboutMe.style.left = '50%';
            aboutMe.style.transform = 'translate(-50%, -50%)';
            if (closeType == 'close') {
                chromeCircle.style.top = '100%';
            }
        } else if (closeType == 'minimize'){
            aboutMe.style.display = 'flex';
        }
    } else {
        if (type == 'close') {
            aboutMe.style.display = 'none';
            chromeCircle.style.top = 'calc(100% + 10px)';
        }
        if (type == 'minimize') {
            aboutMe.style.display = 'none';
        }
        if (type == 'maximize') {
            //do stuff
        }
        closeType = type;
    }
}