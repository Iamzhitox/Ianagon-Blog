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

let acordeon = getElementByClassName('openBlog');

let i;

for (i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let enlaceBlog = this.nextElementSibling;
        if (enlaceBlog.style.display === 'block') {
            enlaceBlog.style.display = 'none';
        } else {
            enlaceBlog.style.display = 'block';
        }
    })
}
