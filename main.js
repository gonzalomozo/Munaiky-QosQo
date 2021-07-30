


/*carrousel bonito*/
document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel= document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 700,
        dist: 0,
        shift: 5,   
        padding: 5,
        numVisible: 5,
		
        indicators: true,
       

    });

});

/*carrousel bonito*/
/*document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel= document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 1500,
        dist: -80,
        shift: 5,   
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: true,

    });

});*/