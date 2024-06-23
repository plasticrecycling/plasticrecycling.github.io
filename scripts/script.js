const delay = ms => new Promise(res => setTimeout(res, ms));
let loadRot = Math.floor(Math.random()*360);
document.getElementById("loading-wheel").style.rotate = loadRot+"deg";

function rotateWheel() {
    loadRot += (360/50);
    document.getElementById("loading-wheel").style.rotate = loadRot+"deg";
}

const rotateWheelInterval = window.setInterval(rotateWheel,10)

const loadAnim = async () => {
    await delay(100);
    document.getElementById("section0").style.opacity = '0';
    document.getElementById("section0").style.pointerEvents = "none";
    await delay(100);
};

loadAnim().then(r => {
    clearInterval(rotateWheelInterval);
    document.getElementById("loading-wheel").remove();
    document.getElementById("section0").close();
});

window.onbeforeunload = function(){
    document.body.style.opacity = '0';
    window.localStorage.setItem('recycle-scroll', document.getElementById("container").scrollTop);
    window.localStorage.setItem('prevPage',window.location.pathname.split('/')[window.location.pathname.split('/').length-1]);
    console.log(window.location.pathname.split('/')[window.location.pathname.split('/').length-1]);
}

setScroll();

function setScroll() {
    // if (window.location.pathname.split('/')[window.location.pathname.split('/').length-1] == window.localStorage.getItem('prevPage')) {
        for (let i = 0; i < document.querySelectorAll("#section-handle div").length; i++) {
            if (i == Math.floor(window.localStorage.getItem('recycle-scroll') / window.innerHeight)) {
                document.querySelectorAll("#section-handle div")[i].style.backgroundColor = 'green';
            } else {
                document.querySelectorAll("#section-handle div")[i].style.backgroundColor = 'lightgrey';
            }
        }
    // }
}

// let timer = null;
// window.addEventListener('scroll', function() {
//     if(timer !== null) {
//         clearTimeout(timer);
//     }
//
//     timer = setTimeout(function() {
//         for (let i = 0; i < document.querySelectorAll("#section-handle div").length; i++) {
//             if (i === Math.floor(JSON.parse(window.localStorage.getItem("recycle-scroll"))/window.innerHeight)) {
//                 document.querySelectorAll("#section-handle div")[i].style.backgroundColor = 'grey';
//                 document.querySelectorAll("#section-handle div")[i].style.currentTarget.style.mixBlendMode = 'normal';
//             }
//         }
//     }, 150);
// }, false);