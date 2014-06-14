$(document).ready(function() {
 
  var owl = $("#gallery");
 
  owl.owlCarousel({
   
    autoPlay: 3000,
    singleItem : true,
    itemsScaleUp : true,
    slideSpeed : 600,
    paginationSpeed : 600,
    rewindSpeed : 600,
    // navigationText : ["<",">"],
    navigationText : false,
    rewindNav : false,
    navigation : true,
    pagination : true,
    paginationNumbers: true,
    addClassActive : true

  });

});
