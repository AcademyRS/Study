const boxForm = document.querySelector('#BoxForm');
const divTask = document.querySelector('.task');
let add = document.querySelector ('#add');
let ready = document.querySelector('#btn');
// let div = document.createElement('div');
// div.setAttribute('class','backBlack');
add.addEventListener ('click', function (event) {
    add.style.opacity = '0';
    // div.style.width = window.innerWidth + 'px';
    // div.style.height =  window.innerHeight + 'px';
    document.querySelector('body').style.marginBottom =  '15px';
    // document.body.appendChild(div);
    boxForm.classList.add('open');
});

div.addEventListener ('click', function () {
    add.style.opacity = '1';
    boxForm.classList.remove('open');
    // document.body.removeChild(div);
});

ready.addEventListener ('click', function (e) {
    e.preventDefault();
    let name = document.querySelector('input[type=text][name=name]').value;
    let date =  document.querySelector('input[type=date][name=date]').value;
    let matter =  document.querySelector('input[type=text][name=matter]').value;
    let description = document.querySelector('.description').value;
    if (name != '' && date != '' && matter != '' && description != '') Create(name, date, matter, description);
    add.style.opacity = '1';
    boxForm.classList.remove('open');
    // document.body.removeChild(div);
});

Create('sas','2013/07/02','Matemática' ,'sda');
Create('dasdsa','2013/07/02','dsad','dsadasdas');
Create('ssdadsaas','2013/07/02','amtesdadsmatica','ddas');

function Create (name, date, matter, description) {
    let div = document.createElement('div');div.setAttribute('id','task');
    let p  = document.createElement('p');
    p.innerText = (name.slice(0, 1)).toUpperCase() + name.slice(1, name.length);p.setAttribute('id','name');
    div.appendChild(p);
    let pa = document.createElement('p');pa.setAttribute('id','more');
    divTask.appendChild(div);
    let second = document.createElement('div');second.setAttribute('id','second');
    p = document.createElement('p');
    p.innerText = date.slice(8,10) + date.slice(4,8) + date.slice(0,4);
    second.appendChild(p);
    p = document.createElement('p');p.innerText = matter;
    second.appendChild(p);
    pa.setAttribute('data-value', '180');
    p = document.createElement('p');p.innerText = description;
    // let divDescri = document.createElement('div');divDescri.setAttribute('id','divDescri');
    // divDescri.appendChild(p);
    // divTask.appendChild(divDescri);
    // pa.addEventListener('click', function (evento) {
    //     if (pa.getAttribute('data-value') === '0') {
    //         pa.style.transform = 'rotate(180deg)';
    //         pa.setAttribute('data-value', '180');
    //         divDescri.style.opacity = '0';
    //         divDescri.style.transform = 'translateY(0px)';
    //         divDescri.style.marginBottom = '0px';
    //     } else { 
    //         pa.style.transform = 'rotate(0deg)';
    //         pa.setAttribute('data-value', '0');
    //         divDescri.style.opacity = '1';
    //         divDescri.style.marginBottom = '30px';
    //         divDescri.style.transform = 'translateY(40px)';
    //     }
    // });
    div.appendChild(pa);
    div.appendChild(second);
}