var fillsLoaded = false;
var strokesLoaded = false;


function randomFills() {
  fillsLoaded = true;
  
  var o = document.getElementById('background').contentDocument;
  var container = o.getElementsByTagName('svg');
  var fills = o.getElementsByTagName('g');
  var classes = [ 'b', 'c', 'd', 'e', 'f' ];
  
  function checkBackground() {
    if($('body').css('background-color') == 'rgb(255, 255, 255)') $(container).removeClass('y').addClass('z');
    else $(container).removeClass('z').addClass('y');
  }
  
  function changeColor() {
    $(fills[Math.floor(Math.random() * fills.length)]).removeClass(classes.join(' ')).addClass(classes[Math.floor(Math.random() * classes.length)]);
    setTimeout(changeColor, Math.random() * 250);
  }
  
  $(window).resize(function() {
    checkBackground();
  });
  
  $(fills).each(function() { $(this).addClass(classes[Math.floor(Math.random() * classes.length)]); });
  checkBackground();
  changeColor();
}


function randomStrokes() {
  strokesLoaded = true;
  
  var strokes = document.getElementById('foreground').contentDocument.getElementsByTagName('g');
  
  function changeOpacity() {
    $(strokes[Math.floor(Math.random() * strokes.length)]).css('opacity', Math.floor(Math.random() * 2));
    setTimeout(changeOpacity, Math.random() * 2000);
  }
  
  $(strokes).each(function() { $(this).css('opacity', Math.floor(Math.random() * 2)); });
  changeOpacity();
}


function nextMedia(o) {
  var i = $(o).find('.-active').last().next().index();
  $(o).find('.-active').removeClass('-active');
  if (i < 0) { i = 0; }
  $(o).find('.work-media-list-item').eq(i).addClass('-active');
}


$(document).ready(function () {
  $('#background').on('load', randomFills);
  $('#foreground').on('load', randomStrokes);
  
  $('.work-media').click(function() { nextMedia(this); });
});


$(window).on('load', function() {
  if(!fillsLoaded && $('#background').length > 0) randomFills();
  if(!strokesLoaded && $('#foreground').length > 0) randomStrokes();
});