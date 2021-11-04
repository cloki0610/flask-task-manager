document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
});
