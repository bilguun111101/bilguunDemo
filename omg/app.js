let qwe = 0;
let map = document.querySelector('.ggg');
let desert = document.querySelector('#ub');

window.addEventListener("scroll", function(){
    // console.log(window.pageYOffset)
    if (window.pageYOffset < 3604.5) {
        map.style.transform = "scale(" + window.pageYOffset / 5000 + ")";
    } else if (window.pageYOffset < 1004.5){
        desert.style.fill = "gold";
    }else if(window.pageXOffset < 500)
    {
        map.style.transform = "scale(0.1)";
    }
    map.style.opacity = window.pageYOffset / 6000;
    // if (window.pageXOffset) {
    // }
})

// let scene1 = new ScrollMagic.Scene({
//     triggerElement: ".ggg",
//     duration: 3000,
//     triggerHook: 0
// })

// .setPin('.container')