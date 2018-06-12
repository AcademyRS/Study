let tablegrade = document.querySelector('#table-grade');

tablegrade.addEventListener('click', function(e) {
    let td = e.target;
    if (td.tagName.toLowerCase() === 'td' && td.className === '') {
        createinput(td);
    }
});

function createinput(td) {
    let input = document.createElement('input');
    input.classList.add('input-grade');
    input.type = 'number';
    input.step = '0.1';
    input.min = '0';
    input.max = '10';
    input.value = td.innerText;
    td.innerText = '';
    td.appendChild(input);
    input.focus();
    input.addEventListener('blur', function(e) {
        if ((input.value >= 0 && input.value <= 10) || input.value == '') {
            td.innerText = input.value;
        } else {
            td.innerText = 10;
        }
        input.remove();
    });
}
