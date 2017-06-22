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

window.onscroll = function (e) {
    var habilidades = document.getElementById("habilidades");
    var menuIcon = document.querySelector('.fa-2x');
    var offset = habilidades.offsetTop;
    var height = habilidades.clientHeight;
    var scroll = window.scrollY;
    if (offset <= scroll + 20 && scroll <= offset + height) {
        menuIcon.style.color = '#406D8A';
    } else {
        menuIcon.style.color = '#f5f5f5';
    }
}
