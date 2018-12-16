window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("op").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("op").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}