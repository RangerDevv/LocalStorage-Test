let button = document.getElementById('btn');
let counttxt = document.getElementById('Counter');
let Counter = 0;

button.addEventListener('click', function() {
    Counter++;
    counttxt.innerText = Counter;
    localStorage.setItem('counter', Counter);
}
);

window.onload = function() {
    counttxt.innerText = localStorage.getItem('counter');
    if (localStorage.getItem('counter') != null) {
        counter = localStorage.getItem('counter');
        Counter = counter;
    }
}