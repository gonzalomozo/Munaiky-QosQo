(function($){
  $(function(){

    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.materialboxed').materialbox();
});
      

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.slider').slider();
});
      