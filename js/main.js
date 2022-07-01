//=================================//
// appear scroll button
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("nav-fixed", window.scrollY > 0);
    var btnScroll = document.querySelector(".btn-scroll");
    btnScroll.classList.toggle("active", window.scrollY > 0);
});

//=======================
// back to top
var scrollToTop = document.querySelector(".btn-scroll");
scrollToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

//======================
// hidden right toolbar
var hiddenSideBar = document.querySelector(".btn-side-bar");
var sideBarMain = document.querySelector(".side-bar-main");
hiddenSideBar.addEventListener("click", function () {
    sideBarMain.classList.toggle("disable");
});

//=====================
// change theme
function changeThemes() {
    var theme = document.querySelector("body");
    theme.classList.toggle("dark");
}

function changeIcon(icon) {
    var case1 = "fa-bars";
    var case2 = "fa-moon";
    for (var i = 0; i < icon.classList.length; i++) {
        if (icon.classList[i] === case1) {
            icon.classList.toggle("fa-xmark");
        } else if (icon.classList[i] === case2) {
            icon.classList.toggle("fa-sun");
        }
    }
}
