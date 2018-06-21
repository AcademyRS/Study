let tablegrade = document.querySelector('#table-grade');
if (localStorage['grade_table'] === undefined) {
    save();
}

if (localStorage['grade_table'] !== undefined) {
    window.onload = load();
}

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
            save();
        } else {
            td.innerText = 10;
            save();
        }
        input.remove();
    });
}

function save() {
    let tdlist = document.querySelectorAll('#table-grade tbody tr td');
    let info = [];
    for (let cont = 0; cont < tdlist.length; cont++) {
        info[cont] = tdlist[cont].innerText;
    }
    localStorage['grade_table'] = JSON.stringify(info);
}

function load() {
    let tdlist = document.querySelectorAll('#table-grade tbody tr td');
    let localS = JSON.parse(localStorage['grade_table']);
    for (let cont = 0; cont < tdlist.length; cont++) {
        tdlist[cont].innerText = localS[cont];
    }
}
