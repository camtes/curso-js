
$(document).ready(function(){
  $("div.d_rombo").hide();
  $("div.d_cuadrado").hide();
  $("div.d_triangulo").hide();

  $(".forma").change(function(){
    cambiar_titulo();
    selector();
  });

  $('#b_accion').click(function() {
    animacion();
  });
});

function cambiar_titulo() {
  switch($('.forma').val()) {
    case 'pelota':

      break;
    case 'rombo':

      break;
    case 'cuadrado':

      break;
    case 'triangulo':
      break;
  }
}

function selector() {
  switch($(".forma").val()) {
    case 'pelota':
      $("div.d_rombo").hide();
      $("div.d_cuadrado").hide();
      $("div.d_triangulo").hide();
      $("div.d_pelota").show();
      $('h2.title').text( "La pelota" );
      break;

    case 'rombo':
      $("div.d_pelota").hide();
      $("div.d_cuadrado").hide();
      $("div.d_triangulo").hide();
      $("div.d_rombo").show();
      $('h2.title').text( "El rombo" );
      break;

    case 'cuadrado':
      $("div.d_pelota").hide();
      $("div.d_rombo").hide();
      $("div.d_triangulo").hide();
      $("div.d_cuadrado").show();
      $('h2.title').text( "La cuadrado" );
      break;

    case 'triangulo':
      $("div.d_pelota").hide();
      $("div.d_cuadrado").hide();
      $("div.d_rombo").hide();
      $("div.d_triangulo").show();
      $('h2.title').text( "El triangulo" );
      break;

  }
}

function animacion() {
  switch($('.forma').val()) {
    case 'pelota':
      $('div.d_pelota').animate({left: '250px'});
      break;
    case 'rombo':
      $('div.d_rombo').animate({left: '250px'});
      break;
    case 'cuadrado':
      $('div.d_cuadrado').animate({left: '250px'});
      break;
    case 'triangulo':
      $('div.d_triangulo').animate({left: '250px'});
      break;
  }
}
