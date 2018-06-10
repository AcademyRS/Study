let tablegrade = document.querySelector('#table-grade');
// Create the input to sent to table
let input = document.createElement('input');
input.classList.add('input-grade');
input.type = 'number';
input.step = '0.1';
input.min = '0';
input.max = '10';

tablegrade.addEventListener('click', function(e) {
    turninput(e);
});

function turninput(td) {
    if (td.target.tagName.toLowerCase() === 'td') {
        let previustdvalue = parseInt(td.target.innerText);
        td.target.innerHTML = '';
        td.target.appendChild(input);
        let getinput = document.querySelector('.input-grade');
        getinput.focus();
        getinput.addEventListener('blur', function(e) {
            turntextback(e.target, td.target, previustdvalue);
        });
    }
}

function turntextback(input, td, previus) {
    console.log(td.childNodes[0]);
    if (input.value === '' || input.value > 10 || input.value < 0 && td.childNodes[0].tagName.toLowerCase() === 'input') {
        td.innerHTML = '';
        td.innerText = '10';
    }
    if (input.value >= 0 && input.value <= 10 && td.childNodes[0].tagName.toLowerCase() === 'input') {
        td.innerHTML = '';
        td.innerText = input.value;
    }
    if (td.childNodes[0].tagName.toLowerCase() !== 'input') {
        td.innerHTML = '';
        td.innerText = previus;
    }
}
// Testar ipotese do Alan, definir Ids para os tds
