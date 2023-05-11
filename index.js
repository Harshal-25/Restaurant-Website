// Home Carousel
$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Navbar
window.addEventListener('scroll', function(){
    let navbar = this.document.getElementById("navbar");
    // Toggles Fixed Class In Navbar On Scroll 
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Nav Buttons 
let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');
let signImg = document.getElementById('signImg');


menuBtn.onclick = function(){
    // Toggles Active Class In Nav Items On Click
    document.getElementById("nav-items").classList.toggle('active');

    // Changes Icon On Click
    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }
    else{
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
    }
}

searchBtn.onclick = function(){
    // Toggles Active Class In Search Form On Click
    document.getElementById("search-form").classList.toggle('active');

    // Changes Icon On Click
    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else{
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }
}
cartBtn.onclick = function(){
    // Toggles Active Class In Cart On Click
    document.getElementById("cart").classList.toggle('active');

    // Changes Icon On Click
    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.add("bx-x");
        cartBtn.classList.remove("bx-cart");
    }
    else{
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart");
    }
}
darkBtn.onclick = function(){
    // Toggles Dark Mode Class To Body On Click
    document.body.classList.toggle('dark-mode');

    // if body contains dark mode class
    if(document.body.classList.contains('dark-mode')){

        // Changes dark mode icon to sun
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");

        // Changes sign img for dark background
        signImg.src = 'Images/sign/sign-dark.png';
    }

    // If body does not contains dark mode class
    else{
        // Changes dark mode icon to moon
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon");

        // Changes sign img for light background
        signImg.src = 'Images/sign/sign-light.png';
    }
}

// Menu Section
let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e){

    // If clicked tab does not contain active class
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){

        // Gets data attribute
        const target = e.target.getAttribute("data-target");

        // Removes active class from active tab 
        menuTabs.querySelector('.active').classList.remove('active');

        // Add active class from clicked tab
        e.target.classList.add("active");

        let menuSection = document.querySelector(".menu-section");

        // removes show class from active tab content
        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");
        // adds show class to clicked tab content
        menuSection.querySelector(target).classList.add("show");
    }
    // If clicked tab contains active class
    else{
        return
    }
})
// Events Carousel
$('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
// Team Carousel
$('.team-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// Review Carousel
$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// Blog Carousel
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})