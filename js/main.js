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
    // var habilidades = document.getElementById("habilidades");
    var menuIcon = document.querySelector('.fa-2x');
    // var offset = habilidades.offsetTop;
    // var height = habilidades.clientHeight;
    var scroll = window.scrollY;
    var secciones = document.querySelectorAll("section");
    secciones.forEach(function (seccion) {
      var offset = seccion.offsetTop;
      var height = seccion.clientHeight;
      if (offset <= scroll + 20 && scroll <= offset + height) {
        switch (seccion.id) {
          case "particles-js":
          case "habilidades":
          case "contacto":
            menuIcon.style.color = '#f5f5f5';
            break;
          default:
            menuIcon.style.color = '#406D8A';
        }
      }
    })
    // if (offset <= scroll + 20 && scroll <= offset + height) {
    //     menuIcon.style.color = '#f5f5f5';
    // } else {
    //     menuIcon.style.color = '#406D8A';
    // }
}
