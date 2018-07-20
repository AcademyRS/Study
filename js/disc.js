const divDiscipline = document.querySelector('.txtDisc');
const boxForm = document.querySelector('#BoxForm');
const adddiv = document.querySelector('#add-div');
let add = document.querySelector('#add');
let btn = document.querySelector('#btn');

boxForm.addEventListener('click', function(event) {
    event.stopPropagation();
});
add.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('body').style.marginBottom = '15px';
    boxForm.classList.add('open');
    adddiv.className += ' add-div-open';
});

btn.addEventListener('click', function(e) {
    e.preventDefault();
    boxForm.classList.remove('open');
    create();

    document.querySelector('input[type=text][name=discipline]').value = '';
    document.querySelector('input[type=text][name=prof]').value = '';
    document.querySelector('input[type=number][name=sala]').value = '';
    closeadddiv();
});

function closeadddiv() {
    boxForm.classList.remove('open');
    adddiv.className = 'add-div';
}

function create() {
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
