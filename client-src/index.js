
console.log('client');

function Title(text) {
    let el = document.createElement('h1');
    el.style.backgroundColor = "rgb(114, 214, 155)";
    el.innerHTML = text;
    return el;
}

//$("<h1>").html('asdf').css({color: 'blue'}).addClass('asdf');
//$("h1 #nikos .clasname").html('asdf');


document.body.appendChild(Title(1));
document.body.appendChild(Title(2));
document.body.appendChild(Title(3));

let hi_0 = document.querySelectorAll('h1')[0];
setInterval(() => {
    let value = Number(hi_0.innerHTML);
    value++;
    hi_0.innerHTML = value;
}, 1000);

let hi_1 = document.querySelectorAll('h1')[1];
hi_1.addEventListener('mouseup', () => {
    let value = Number(hi_1.innerHTML);
    value += 2;
    hi_1.innerHTML = value;
});