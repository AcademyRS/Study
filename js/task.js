const boxForm = document.querySelector('#BoxForm');
const divTask = document.querySelector ('.task');
let add = document.querySelector ('#add');
let nav = document.querySelector('.topnav');
let logo = document.querySelector ('.navbar-brand');
let ready = document.querySelector('#btn');
let body = document.querySelector('.body');
let div = document.createElement('div');
div.setAttribute('id', 'opac');
let auxiliar = '';
let open = 0;
let rotate = 180;

boxForm.addEventListener ('click', function (event) {event.stopPropagation();})
add.addEventListener ('click', function (event) {
    event.stopPropagation();
    add.style.opacity = '0';
    div.style.width = window.innerWidth + 'px';
    div.style.height =  window.innerHeight + 'px';
    document.body.appendChild(div);
    boxForm.classList.add('open');
    open = 1;
    logo.href = '#';
    divTask.classList.add('left');
    body.style.display = 'none';
});

ready.addEventListener ('click', function (e) {
    e.preventDefault();
    document.body.removeChild(document.querySelector('#opac'));
    console.log(document.querySelector('#opac'))
    let name = document.querySelector('.name').value;
    let date =  document.querySelector('.date').value;
    let matter =  document.querySelector('.matter').value;
    let text = document.querySelector('.description').value;

    if (name != '' && date != '' && matter != '' && text != '') {Create(name,date,matter,text);}
    boxForm.classList.remove('open');
    add.style.opacity = '1';
    open = 0;
    logo.href = 'index.html';
    divTask.classList.remove('left');
    document.body.style.background = 'white';
    body.style.display = 'block';
});

document.body.addEventListener ('click', function () {
    boxForm.classList.remove('open');
    document.body.removeChild(document.querySelector('#opac'));
    add.style.opacity = '1';
    open = 0;
    logo.href = 'index.html';
    divTask.classList.remove('left');
    document.body.style.background = 'white';
    body.style.display = 'block';
    event.stopPropagation();
});
Create ('nome','17/01/2001','nsei','ass')
Create ('ndasdsaome','17/01/2001','nsei','asdasdsas')

function Create (name, date, matter, description) {
    var a, b, c;
    a = document.createElement('ul');
    a.setAttribute('class', 'job job' + ( document.getElementsByClassName('job').length + 1) + '');
    b = document.createElement('p');b.setAttribute('class', 'name_job');
    b.innerText = (name.slice(0, 1)).toUpperCase() + name.slice(1, name.length);
    a.appendChild(b);
    b = document.createElement('button');b.setAttribute('class', 'description_job');
    b.value = description;
    b.addEventListener ('click', More);
    a.appendChild(b);
    c = document.createElement('div');c.setAttribute('class', 'second_job');
    b = document.createElement('p');b.setAttribute('class', 'date_job');
    b.innerText= date.slice(8,10) + "/" + date.slice(5,7) + "/" + date.slice(0,4);
    c.appendChild(b);
    b = document.createElement('p');b.setAttribute('class', 'matter_job');
    b.innerText=matter;c.appendChild(b);b = document.createElement('button');
    b.setAttribute('class', 'delete');
    c.appendChild(b);
    a.appendChild(c);
    divTask.appendChild(a);

    document.querySelector('.name').value = '';
    document.querySelector('.date').value = '';
    document.querySelector('.matter').value = '';
    document.querySelector('.description').value = '';
}
function More (evento) {
    evento.stopPropagation();
    if (evento.target.className ==='description_job') {
        if (rotate === 180){
            evento.target.style.transform = 'rotate(0deg)';
            rotate = 0;
            a = document.createElement('div');
            a.setAttribute('class', 'descrip');
            b = document.createElement('p');
            b.innerText = evento.target.value;
            a.appendChild(b);
            body.appendChild(a);
            body.style.transform = 'translate(0, 0)';
        } else {
            evento.target.style.transform = 'rotate(180deg)';
            setTimeout(function () {body.removeChild(body.childNodes[0]);}, 200);
            body.style.transform = 'translate(0, -100%)';
            rotate = 180;
        }
    }
    if(evento.target.className=='delete'){
        var a = event.target.parentElement.parentElement;
        for (var i = 0;i<4;i++){
            a.removeChild(a.children[0]);
        }
        body.removeChild(a);
        auxiliar = '';
    }
};