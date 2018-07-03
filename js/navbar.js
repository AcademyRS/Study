function opennavbar() {
    let navbar = document.getElementById('navbar');
    let navbarclose = document.getElementById('navbar-close-div');
    if (navbar.className === 'navbar') {
        navbar.className += ' navbar-open';
        navbarclose.className += ' navbar-close-div-open';
    }
}

function closenavbar() {
    let navbar = document.getElementById('navbar');
    let navbarclose = document.getElementById('navbar-close-div');
    if (navbar.className === 'navbar navbar-open') {
        navbar.className = 'navbar';
        navbarclose.className = 'navbar-close-div';
    }
}
