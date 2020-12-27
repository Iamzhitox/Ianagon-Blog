function burguer(x) {
    x.classList.toggle("burguer-inclination");
}

let click = 1;

function openAndCloseBarNav(x) {
    if (click === 1) {
        document.getElementById('navbar').style.display = 'block';

        click = click + 1;
    } else {
        document.getElementById('navbar').style.display = 'none';
        click = 1;
    }
}
