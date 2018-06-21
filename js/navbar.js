function opennavbar() {
    let navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar') {
        navbar.className += ' navbar-open';
    }
}

function closenavbar() {
    let navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar navbar-open') {
        navbar.className = 'navbar';
    }
}
