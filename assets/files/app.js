const cid = 'LPTest1-OnlineSlots';
let a = `https://www.slotzo.com/?PAR=178ga64cid${cid}&NeoDL=registration'`;
let links = document.querySelectorAll('.cid');
let steps = document.querySelectorAll('.step');

window.addEventListener('load', () => {
    links.forEach(x => {
        x.href = a;
    })
    steps.forEach((x,i) => {
        let step = document.createElement('p');
        step.innerText = i+1;
        step.classList.add('index');
        x.appendChild(step);
    })
})