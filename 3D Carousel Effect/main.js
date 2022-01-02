(function() {
    var rotate;
  
    rotate = function() {
        return $('.card:first-child').fadeOut(400, 'swing', function() {
            return $('.card:first-child').appendTo('.container').hide();
        }).fadeIn(400, 'swing');
    };
  
    $('.fi-sr-cross-small').click(function() {
        return rotate();
      });
    $('.fi-sr-heart').dblclick(function() {
        return rotate();
    });
}).call(this);




  