let wrapper = document.querySelector('.wrapper');
let mode = document.querySelector('#mode');

let background = "light";

mode.addEventListener('click', () => {
    if (background === "light") {
        wrapper.style.backgroundColor = 'grey';
        background = "dark";
    } else {
        wrapper.style.backgroundColor = 'white';
        background = "light";
    }
});
