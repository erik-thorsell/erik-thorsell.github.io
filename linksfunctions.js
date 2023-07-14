window.addEventListener('load', () => {

    //hide the loader
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', () => {
            window.open(links[i].getAttribute('destination'), '_blank');
        });
    }
});