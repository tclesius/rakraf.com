function Animation() {
    var a = document.getElementsByClassName("mid-logo");
    var k = document.getElementsByClassName("bottom");
    var z = document.getElementsByClassName("mid-logo");
    var x = document.getElementsByClassName("slide");
    var l = document.getElementById("wochentag");
    a[0].classList.add("colorChange");
    x[0].classList.add("slideAnimation");
    z[0].classList.add("despawnAnimation");
    l.classList.add("slideOutAnimation");
    setTimeout(function () {
        z[0].remove();
        l.remove()
    }, 4e3);
    k[0].classList.add("zIndex");
    k[0].classList.add("spawnAnimation");
    setTimeout(function () {
        document.getElementsByClassName("page-content")[0].style.opacity = "1"
    }, 150)
}

$(document).ready(function () {
    const weekDayN = ["", "money monday", "dienstag", "woo back wednesday", "dizzy donnerstag", "turn up friday", "cozy saturday", "holy sunday"];
    const d = new Date;
    const n = d.getDay();
    if (document.getElementById("wochentag")) {
        document.getElementById("wochentag").innerHTML = weekDayN[n]
    }
});
let fl2 = false;
window.onload = function () {
    document.getElementById("button").onclick = function Nav() {
        if (document.getElementById("nav").style.height === "100px") {
            return close()
        }
        return open()
    }
    ;

    function open() {
        fl2 = true;
        document.getElementsByClassName("slide")[0].style.transition = "0s";
        document.getElementById("nav").style.height = "100px";
        document.getElementById("nav").style.opacity = "1"
    }

    function close() {
        fl2 = false;
        document.getElementsByClassName("slide")[0].style.transition = "1s";
        document.getElementById("nav").style.height = "0px";
        document.getElementById("nav").style.opacity = "0"
    }
}
;
let fl = false;
$(document).ready(function () {
    if (!fl) {
        new ResizeSensor($(".slide"), function () {
                let slideheight = $(".slide").height();
                if (slideheight <= 80) {
                    fl = true
                }
            }
        )
    }
});
$(document).ready(function () {
    new ResizeSensor($("#nav"), function () {
            let navheight = $("#nav").height();
            if (navheight <= 95) {
                document.getElementsByClassName("slide")[0].style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementsByClassName("nvitems")[0].style.opacity = "1";
                document.getElementsByClassName("nvitems")[1].style.opacity = "1"
            }
            if (navheight <= 5) {
                document.getElementsByClassName("slide")[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
                document.getElementsByClassName("nvitems")[0].style.opacity = "0";
                document.getElementsByClassName("nvitems")[1].style.opacity = "0"
            }
        }
    )
});

function blendIn() {
    if (fl && !fl2) {
        document.getElementsByClassName("slide")[0].style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementsByClassName("slide")[0].style.transition = "0.5s"
    }
}

function blendOut() {
    if (fl && !fl2) {
        document.getElementsByClassName("slide")[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
        document.getElementsByClassName("slide")[0].style.transition = "0.5s"
    }
}
