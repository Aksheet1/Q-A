let btns = document.querySelectorAll('.wrap_toggle');
let wraps = document.querySelectorAll('.wrap');


for (let i=0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        wraps[i].classList.toggle('active');
        // toggle active class on or off based on button
    })
}