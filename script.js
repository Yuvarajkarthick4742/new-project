

const slides = document.querySelectorAll('.testimonial-slide');
const lines = document.querySelectorAll('.dot');  // Updated to match the new lines
let currentIndex = 0;
let isAnimating = false;

function showSlide(index) {
if (isAnimating) return;
isAnimating = true;

const currentSlide = slides[currentIndex];
const nextSlide = slides[index];
const direction = index > currentIndex ? 1 : -1;

currentSlide.style.transform = 'translateX(0)';
nextSlide.style.transform = `translateX(${direction * 100}%)`;


currentSlide.classList.remove('active');
nextSlide.classList.add('active');

setTimeout(() => {
    currentSlide.style.transform = `translateX(${direction * - 100}%)`;
    nextSlide.style.transform = 'translateX(0)';

    lines[currentIndex].classList.remove('active');
    lines[index].classList.add('active');
    currentIndex = index;
    isAnimating = false;
}, 10);

}
function nextSlide() {
const nextIndex = (currentIndex + 1) % slides.length;
showSlide(nextIndex);
}

function prevSlide() {
const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
showSlide(prevIndex);
}

lines.forEach((line, index) => {
line.addEventListener('click', () => {
    if (index !== currentIndex) {
        showSlide(index);
    }
});
});


// Initial display
showSlide(currentIndex);


    $(document).ready(function() {
        $('.foot-resp-svg').click(function() {
            $('.foot-one1').toggleClass('new-class');
        });
    });




$(document).ready(function() {
    $('.foot-resp-svg2').click(function() {
        $('.foot-two2').toggleClass('new-class2');
    });
});



$(document).ready(function() {
    $('.foot-resp-svg3').click(function() {
        $('.foot-three3').toggleClass('new-class3');
    });
});

$(document).ready(function() {
    $('.foot-resp-svg4').click(function() {
        $('.foot-four4').toggleClass('new-class4');
    });
});

$(document).ready(function() {
    $('.foot-resp-svg').click(function() {
        $('.footer-svg1').toggleClass('foot-svg-new1');
    });
});

$(document).ready(function() {
    $('.foot-resp-svg2').click(function() {
        $('.footer-svg2').toggleClass('foot-svg-new2');
    });
});

$(document).ready(function() {
    $('.foot-resp-svg3').click(function() {
        $('.footer-svg3').toggleClass('foot-svg-new3');
    });
});


$(document).ready(function() {
    $('.foot-resp-svg4').click(function() {
        $('.footer-svg4').toggleClass('foot-svg-new4');
    });
});

$(document).ready(function() {
    $('.foot-resp-h2-2').click(function() {
        $('.foot-two2').toggleClass('new-class2');
    });
});

$(document).ready(function() {
    $('.foot-resp-h2-3').click(function() {
        $('.foot-three3').toggleClass('new-class3');
    });
});

$(document).ready(function() {
    $('.foot-resp-h2-4').click(function() {
        $('.foot-four4').toggleClass('new-class4');
    });
});

 $(document).ready(function() {if ( $(window).width() < 992 ) {blogCarousel();} else {$('.blogCarousel').addClass('off');}});    
     $(window).resize(function() {if ( $(window).width() < 992 ) {blogCarousel();} else {stopCarousel();}});
     function blogCarousel(){       
       $(".blogCarousel").owlCarousel({
          slideSpeed : 500,
          margin:10,
          paginationSpeed : 400,
          autoplay:true,
           autoplayHoverPause:true,
          items : 1,
            dots: true,
          loop:true,
          nav:false,
          responsive: {
0: {
    items: 1
},
600: { // You can use 600 or 767 as per your preference
    items: 2
},
994: {
    items: 3
}
}
       });
     }
      
       function stopCarousel() {
       var owl = $('.twocols');
       owl.trigger('destroy.owl.carousel');
       owl.addClass('off');
     }

 $('.prmore').click(function() {
$('.pvmc').slideToggle();
if ($('.prmore').text() == "Read More") {
  $(this).text("Read Less");
} else {
  $(this).text("Read More");
}
});
$(".").click(function(){
  $(this).toggleClass('iclose');
  $(".ql").toggleClass("open");
});
$(".pinfh").click(function(){
  $(this).toggleClass('iclose');
  $(".pinf").toggleClass("open");
});
$(".cinfh").click(function(){
  $(this).toggleClass('iclose');
  $(".cinf").toggleClass("open");
});

 $('.link1').on('click',function(){
  window.location.href='vaccum-conveyors.php'; 
});
$('.link2').on('click',function(){
  window.location.href='material-handling.php'; 
});
 $('.link3').on('click',function(){
  window.location.href='industrial-house-keeping.php'; 
});
 $('.link4').on('click',function(){
  window.location.href='vaccum-valves.php'; 
});
   $('.link5').on('click',function(){
  window.location.href='pneumatic-valves.php'; 
});
$('.link6').on('click',function(){
  window.location.href='unijet-flat-suction-pad.php'; 
});
  $('.link7').on('click',function(){
  window.location.href='custom-products.php'; 
});


//    Add an event listener for all tab links
document.querySelectorAll('.parts-top h3 a').forEach(function(tabLink) {
    tabLink.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove 'selected' class from all tab links
        document.querySelectorAll('.parts-top h3 a').forEach(function(link) {
            link.classList.remove('selected');
        });

        // Add 'selected' class to the clicked tab
        this.classList.add('selected');

        // Get the filter class from the clicked tab
        var filterClass = this.getAttribute('data-filter');

        // Hide all project items
        document.querySelectorAll('.parts-down .project-item').forEach(function(item) {
            item.classList.remove('active');
        });

        // Show the project items matching the filter class
        document.querySelectorAll('.parts-down ' + filterClass).forEach(function(item) {
            item.classList.add('active');
        });
    });
});

// Show the first tab by default on page load
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.parts-top h3 a.selected').click();
});




$(document).ready(function() {if ( $(window).width() < 992 ) {startCarousel2();} else {$('.doctorCarousel').addClass('off');}});    
$(window).resize(function() {if ( $(window).width() < 992 ) {startCarousel2();} else {stopCarousel();}}); 

function startCarousel2(){  
      $(".doctorCarousel").owlCarousel({
          navigation : true,
          slideSpeed : 500,
          margin:40,
          paginationSpeed : 400,
          autoplay:true,
            smartSpeed: 600,
            dots: true,
             nav: true,
              navText : ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>'],
          itemsDesktop : false,
          itemsDesktopSmall : false,
          loop:true,
            responsive:{
                0:{
                         items:1
                     },
                580:{
                         items:2
                     },
                952:{
                         items:2
                     }
                 }
       });
     }
     function stopCarousel() {
       var owl = $('.twocols');
       owl.trigger('destroy.owl.carousel');
       owl.addClass('off');
     } 




    $(document).ready(function() {if ( $(window).width() < 992 ) {earingCarousel();} else {$('.earingCarousel').addClass('off');}});    
        $(window).resize(function() {if ( $(window).width() < 992 ) {earingCarousel();} else {stopCarousel();}});
        function earingCarousel(){       
          $(".earingCarousel").owlCarousel({
             slideSpeed : 500,
             margin:10,
             paginationSpeed : 400,
             autoplay:true,
              autoplayHoverPause:true,
             items : 1,
               dots: true,
             loop:true,
             nav:false,
             responsive: {
   0: {
       items: 1
   },
   450:{
    items: 3
   },
   700: { // You can use 600 or 767 as per your preference
       items: 4
   },
   994: {
       items: 4
   }
}
          });
        }
         
          function stopCarousel() {
          var owl = $('.twocols');
          owl.trigger('destroy.owl.carousel');
          owl.addClass('off');
        }
   


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('side-menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    menuToggle.addEventListener('click', function() {
        // Toggle the side menu visibility
        sideMenu.classList.toggle('show');
        // Toggle the active state for the hamburger icon
        menuToggle.classList.toggle('active');
    });
});