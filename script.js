window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) { 
      navbar.style.backgroundColor = 'black'; 
  } else {
      navbar.style.backgroundColor = ''; 
  }
});


var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter= 1;
    }
},5000)

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('carousel_cont');
    const prevButton = document.getElementById('carousel_previous_button')
    const nextButton = document.getElementById('carousel_next_button');
    let currentTransform = 0;
  
    prevButton.addEventListener('click', function() {
      currentTransform += 300; 
      container.style.transform = `translateX(${currentTransform}px)`;
    });
  
    nextButton.addEventListener('click', function() {
      currentTransform -= 300; 
      container.style.transform = `translateX(${currentTransform}px)`;
    });
  });


  document.getElementById('ontheater').addEventListener('click', function (e) {
    e.preventDefault(); 
    var targetelement = document.querySelector(this.getAttribute('href'));
 
    if (targetelement) {
      targetelement.scrollIntoView({ behavior: 'smooth' }); 
    }
  });