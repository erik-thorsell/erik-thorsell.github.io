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

//check if mobile
function isMobile() {
  //if screen is less than 800px wide or the useragent contains iphone, ipad or android, return true
    if (window.innerWidth <= 800 || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i)) {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function(){
  //send to mobile site if mobile
  if (isMobile()) {
    if (window.location.href.includes("mobile")) {
      return;
    }
    window.location.replace("https://erikthorsell.com/mobile");
  } else {
    if (window.location.href.includes("desktop")) {
      return;
    }
    window.location.replace("https://erikthorsell.com/desktop")
  }
});