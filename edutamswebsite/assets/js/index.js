


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     dots:false,
//     nav:true,
//     autoplay:true,   
//     smartSpeed: 3000, 
//     autoplayTimeout:3000,
//     responsive:{
//         0:{
//             items:1
//         },
//         300:{
//             items:2
//         },
//         600:{
//             items:3
//         },
//         900:{
//             items:4
//         },
//         1200:{
//             items:5
//         },
//         1500:{
//             items:6
//         },


//     }
// })





