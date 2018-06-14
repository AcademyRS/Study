
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" && open != 1) {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}