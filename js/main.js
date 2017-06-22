$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true // Choose whether you can drag to open on touch screens
});

var cargarProgressBar = function() {
  var scroll = document.body.scrollTop;
  if (scroll >= 600) {
    $('.progress').show('slow');
  } else if (scroll < 599) {
    $('.progress').hide();
  }
};

$(document).ready(function() {
  $('.collapsible').collapsible();
});

// Menu
// 
// $('.button-collapse').sideNav({
//      menuWidth: 300, // Default is 300
//      edge: 'right', // Choose the horizontal origin
//      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//      draggable: true, // Choose whether you can drag to open on touch screens,
//      onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
//      onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
//    }
//  );
