document.addEventListener('DOMContentLoaded', function(){
    const destination = document.getElementById('redirect').getAttribute('destination');
    window.location.replace(destination);
});