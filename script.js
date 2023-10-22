function locomotive() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}

function onload() {
    var t1 = gsap.timeline()

    t1.from(".nav .line, .nav", {
        y: -20,
        stagger: 0.1
    })

    t1.from(".page1 h1", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })

    t1.from(".page1 img", {
        y: 85,
        opacity: 0,
    })

}

function moving() {


    document.addEventListener("mousemove", function (delts) {
        gsap.to("#cursor", {
            left: delts.x,
            top: delts.y,
        })
    })

    document.querySelector(".page4").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            scale: 1,
            transform: "translate(-50%, -50%)"
        })
    });

    document.querySelector(".page4").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 0,
        })
    });

}

function page4() {

    let mm = gsap.matchMedia();
    mm.add("(min-width : 500px)", () => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page4 ",
                scroller: "body",
                start: "top 25%",
                end: "100% 100%",
                // markers: true,
            }
        })
    
        tl.from(".page4 #child1", {
            opacity: 0,
            duration: 1,
            x: -400,
            y: -400,
        }, "A")
    
        tl.from(".page4 #child2", {
            opacity: 0,
            duration: 1,
            x: 400,
            y: -400,
        }, "A")
    
        tl.from(".page4 #child3", {
            opacity: 0,
            duration: 1,
            x: -400,
            y: 400,
        }, "A")
    
        tl.from(".page4 #child4", {
            opacity: 0,
            duration: 1,
            x: 400,
            y: 400,
        }, "A")
    })

   mm.add("(max-width : 500px)" , ()=> {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4 ",
            scroller: "body",
            start: "0% 100%",
            end: "0% 0%",
            // markers: true,
        }
    })
    tl.from(".page4 #child1", {
        opacity: 0,
        duration: 1,
        x: -400,
        y: -400,
    }, "A")

    tl.from(".page4 #child2", {
        opacity: 0,
        duration: 1,
        x: 400,
        y: -400,
    }, "A")

    tl.from(".page4 #child3", {
        opacity: 0,
        duration: 1,
        x: -400,
        y: 400,
    }, "B")

    tl.from(".page4 #child4", {
        opacity: 0,
        duration: 1,
        x: 400,
        y: 400,
    }, "B")
    
   })


}

buttons = document.querySelectorAll(".dot");
names = document.querySelectorAll(".name");
review = document.querySelector(".lower .text");
reviews = [
    "What sets VINTA apart is its diverse collection. From sleek backpacks to elegant tote bags, they cater to various tastes and needs, ensuring there's a VINTA bag for everyone.",
    "VINTA's sustainability commitment is impressive, using eco-friendly materials without sacrificing style. These bags aren't just attractive; they're also practical with ample storage and durability.",
    "What's truly exceptional is VINTA's ability to blend tradition and innovation. They draw from cultural inspirations, infusing their bags with a unique and timeless quality that appeals to a wide audience.",
    "VINTA's bags are a true fashion find, seamlessly blending style and functionality. Craftsmanship and attention to detail are evident in every piece, making them a favorite among fashion enthusiasts.",
    "Versatility is a hallmark of VINTA bags. Their selection caters to diverse tastes, offering options for both everyday use and special occasions, making them a versatile and stylish choice.",
    "The cultural influences in VINTA's designs add a unique and captivating dimension. They blend tradition with innovation, resulting in bags that are modern yet culturally rich.",
    "VINTA bags are a smart choice for fashion-conscious individuals. Their blend of craftsmanship, diversity, sustainability, practicality, and cultural inspirations make them stand out in the market.",
]
function colorChange(i) {

    buttons.forEach(function (elem) {
        elem.style.backgroundColor = "white";
    })

    buttons[i - 1].style.backgroundColor = "black";

    gsap.from(review, {
        opacity: 0,
        duration: 1,
        y: 100,
        ease: "elastic.out(1, 0.3)",
    })

    gsap.from(names[i - 1], {
        scale: 2,
        duration: 1,
    })

    gsap.to(review, {
        innerText: reviews[i - 1],
    })

}




// locomotive()
onload();
moving()
page4()




