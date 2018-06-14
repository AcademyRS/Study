const divDiscipline = document.querySelector('.discipline');
const boxForm = document.querySelector('#BoxForm');
let add = document.querySelector('#add');
let btn = document.querySelector('#btn');
let div = document.createElement('div');
div.setAttribute('id', 'opac');
let open = 0;
let divs = 1;


boxForm.addEventListener ('click', function (event) {event.stopPropagation();})
add.addEventListener ('click', function (event) {
    event.preventDefault();
    div.style.width = window.innerWidth + 'px';
    div.style.height =  window.innerHeight + 'px';
    if (divDiscipline.childNodes.length >= 4) {
        div.style.height =  (window.innerHeight + (divDiscipline.childNodes.length - 3) * 80) + 'px';
    }
    document.body.appendChild(div);
    boxForm.classList.add('open');
    event.stopPropagation();
    open = 1;
});

div.addEventListener ('click', function () {
    boxForm.classList.remove('open');
    document.body.removeChild(div);
    event.stopPropagation();
    open = 0;
});

btn.addEventListener ('click', function (e) {
    e.preventDefault();
    divs++;
    boxForm.classList.remove('open');
    document.body.removeChild(div);
    event.stopPropagation();
    open = 0;
    Create();

    document.querySelector('input[type=text][name=discipline]').value = '';
    document.querySelector('input[type=text][name=prof]').value = '';
    document.querySelector('input[type=number][name=sala]').value = '';
});

function Create () {
    let dv = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = document.querySelector('input[type=text][name=discipline]').value;
    let p = document.createElement('p');
    p.innerText = 'Prof: ' + document.querySelector('input[type=text][name=prof]').value;
    dv.setAttribute('class', 'disc');
    dv.appendChild(h3);
    dv.appendChild(p);
    p = document.createElement('p');
    p.innerText = 'Sala: ' + document.querySelector('input[type=number][name=sala]').value;
    dv.appendChild(p);
    divDiscipline.appendChild(dv);
}