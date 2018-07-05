let divs = document.querySelectorAll('.container-home div');

for (let cont = 0; cont < divs.length; cont++) {
    divs[cont].addEventListener('click', function(e) {
        if (e.target.tagName == 'DIV') {
            window.location.replace('http://academyrs.github.io/Study/' + e.target.id + '.html');
        } else {
            window.location.replace('http://academyrs.github.io/Study/' + e.target.parentElement.id + '.html');
        }
    });
}
