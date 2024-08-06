let img = document.querySelector('main');
let counter = document.querySelector('h1');
let c = 0;

let count = setInterval(() => {
    counter.innerText = `${++c}%`;
    img.style.filter = `blur(${100 - c}px)`
    
    if (c > 99) {
        clearInterval(count);
    }
}, 30);


