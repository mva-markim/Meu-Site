/*Menu DropDown*/
var menuDropdown = document.getElementById('myDropdown');
var btnMenu = document.getElementById("btnMenu");
var icon = document.getElementById("icon");
btnMenu.onclick = function() {
    if (menuDropdown.style.display == "block") {
        menuDropdown.style.display = "none";
        btnMenu.removeAttribute("style");
        icon.classList.remove("fa-level-up");
        icon.classList.add("fa-level-down");
    } else {
        menuDropdown.style.display = "block";
        btnMenu.style.color = "#fff";
        icon.classList.add("fa-level-up");
        icon.classList.remove("fa-level-down");
    }
}

/*Menu*/
var iconMenu = document.getElementById('iconMenu');
var menu = document.getElementById('menu');
var navMenu = document.getElementById('navMenu');
var logo = document.getElementById('logo');
iconMenu.onclick = function() {
    if (navMenu.style.height == "100%") {
        navMenu.style.height = "60px"
        menu.style.display = "none";
        this.classList.remove('fa-times', 'icon-menu-open');
        this.classList.add('fa-bars');
        logo.classList.add('logo');
        logo.classList.remove('logo-menu-open');
        document.body.style.overflowY = "auto";
    } else {
        navMenu.style.height = "100%";
        menu.style.display = "block";
        this.classList.remove('fa-bars');
        this.classList.add('fa-times', 'icon-menu-open');
        logo.classList.remove('logo');
        logo.classList.add('logo-menu-open');
        document.body.style.overflow = "hidden";
    }

}