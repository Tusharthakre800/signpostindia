
 

function Menu (){
    var menuToggle = document.getElementById("menuToggle");

    var menuBar = gsap.timeline({ paused: true});
    
    menuBar.to('.bar-1', 0.5,{
        attr:{d: "M8,2 L2,8"},
        x:1,
        ease: Power2.easeInOut
    }, 'start')
    
    menuBar.to('.bar-2', 0.5,{
        autoAlpha:0
    }, 'start')
    
    menuBar.to('.bar-3', 0.5,{
        attr:{d: "M8,8 L2,2"},
        x:1,
        ease: Power2.easeInOut
    }, 'start')
    
    menuBar.reverse();
    
    var navTl = gsap.timeline({ paused:true });
    
    navTl.to('.fullpage-menu', {
        duration:0,
        display: "block",
        ease: Expo.easeInOut
    }, "<");
    
    navTl.to('.menu-bg', {
        duration:1,
        opacity:1,
        ease: Expo.easeInOut
    }, "<");
    
    navTl.from('.main-menu li a', {
        duration:1.5,
        y:"100%",
        rotateY:30,
        stagger:0.2,
        ease: Expo.easeInOut 
    }, "-=0.5");
    
    navTl.reverse();
    
    menuToggle.addEventListener('click', function(){
        menuBar.reversed(!menuBar.reversed());
        navTl.reversed(!navTl.reversed());
    })
}

// top slider

function topslider(){
    
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        if (index < 0) {
            slideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }
        const offset = -slideIndex * 100;
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    }
    
    function nextSlide() {
        showSlide(slideIndex + 1);
    }
    
    function prevSlide() {
        showSlide(slideIndex - 1);
    }
    
    // Automatically advance slides every 5 seconds
    setInterval(nextSlide, 2000);
    
    // Start the slider when the page loads
    window.onload = showSlide(slideIndex);
    
    
    
}
// gsap Animation

function Gsap(){
    var tushar = gsap.timeline()
    
    
    
    tushar.from(".loader h3 ",{
        x:200,
        opacity:0,
        duration:2,
        // stagger:0.3     
    }
)
tushar.to(".loader h3",{
    opacity:0,
    x:-200,
    duration:1.5,
    
})

tushar.to(".loader",{
    height:-100,
    duration:1,
    
})
tushar.to(".loader",{
    display:"none",
    
})
tushar.from(".img",{
    y:-100,
    duration:1, 
})

tushar.from(".container",{
    
    x:100,
    opacity:1,
    scale:0,
    duration:1.5
})
tushar.from(".page3 .cards",{
    transform:"translateX(100%)",
//    x:"100%",
    duration:1,
    scrollTrigger:{
        trigger:" .page3 ",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:1,
        pin:true
        
    }
})
}



function mouse(){
    
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1
    });
    
    Shery.makeMagnet(".icon a" /* Element toicon target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.hoverWithMediaCircle(".page4 video" /* Element to target.*/, {
        
        images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
        //videos: ["video1.mp4", "video2.mp4"],
      });
    
    
}
//  bottom slider


function bottomslider(){
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
    
}

Menu()
topslider()
Gsap()
mouse()
bottomslider()