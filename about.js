var elems = document.querySelectorAll(".elem");

var imgs2 = [
    "./assets/bg5.avif",
    "./assets/bg2.avif",
    "./assets/bg3.avif",
    "./assets/bg4.avif",
    "./assets/bg1.avif"
]

elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;


    document.querySelector(".main").addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" }),
                    animating = false
                }
            })

            index == h1s.length - 1 ? index = 0 : index++;

            gsap.set(".back img",
                {
                    attr: { src: `${imgs2[index]}` },
                    delay: 0.4,
                    ease: Expo.easeInOut,
                });

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,

            })
          

        }

    })
}

)

function change() {
    location.href = "index.html";
}
