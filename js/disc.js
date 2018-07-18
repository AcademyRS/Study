const divDiscipline = document.querySelector('.txtDisc');
const boxForm = document.querySelector('#BoxForm');
let add = document.querySelector('#add');
let btn = document.querySelector('#btn');
// let div = document.createElement('div');
// div.setAttribute('class','backBlack');


boxForm.addEventListener ('click', function (event) {event.stopPropagation();})
add.addEventListener ('click', function (event) {
    event.preventDefault();
    // div.style.width = window.innerWidth + 'px';
    // div.style.height =  window.innerHeight + 'px';
    document.querySelector('body').style.marginBottom =  '15px';
    // document.body.appendChild(div);
    boxForm.classList.add('open');
});

// div.addEventListener ('click', function () {
//     boxForm.classList.remove('open');
//     document.body.removeChild(div);
// });

btn.addEventListener ('click', function (e) {
    e.preventDefault();
    boxForm.classList.remove('open');
    // document.body.removeChild(div);
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
    dv.setAttribute('class', 'addDisc');
    dv.appendChild(h3);
    dv.appendChild(p);
    p = document.createElement('p');
    p.innerText = 'Sala: ' + document.querySelector('input[type=number][name=sala]').value;
    if (document.querySelector('input[type=number][name=sala]').value === '') p.innerText = 'Sala: Indefinido';
    dv.appendChild(p);
    divDiscipline.appendChild(dv);
}