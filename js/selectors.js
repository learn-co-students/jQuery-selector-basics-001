'use-strict';
$(document).ready(function(){
  h1Selector();
  liInOlSelector();
  linkSelector();
  imageSelector();
  checkboxInputSelector();
});

// declare your functions here...

var h1Selector = function(){
  return $("h1")
}

var liInOlSelector = function(){
  return $("ol li")
}

var linkSelector = function(){
  return $("#box4.box5 a")
}

var imageSelector = function(){
  return $('img[alt="cat sleeping"]')
}

var checkboxInputSelector = function(){
  return $(":checkbox").wrap("<span class='pinky' />")
}
