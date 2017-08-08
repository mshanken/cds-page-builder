
$(document).ready(function(){
  //SHOW/HIDE
  $(".toggle-btn").click(function(){
    $(".toggle-info").toggle();
  });

  //IMG OVERLAY
  $('.left-box button').on('click', function(e){
    e.preventDefault();
    $('.button-press').not(this).removeClass('active').html(function() {});
    $(this).addClass('active').html
    $('.left-box button').removeClass('overlay');
    $('.middle-box button, .right-box button').addClass('overlay');
    $('.left-box img').removeClass('overlay');
    $('.middle-box img, .right-box img').addClass('overlay');
    $('.left-box p').removeClass('overlay');
    $('.middle-box p, .right-box p').addClass('overlay');
    var elbuttom = e.currentTarget.id,
        elId = elbuttom.replace('-btn','');
    $('#grid-wrapper').find('input').attr('checked', false);
    $('.'+elId).find('input').attr('checked', true);
  })

  $('.middle-box button').on('click', function(e){
    e.preventDefault();
    $('.button-press').not(this).removeClass('active').html(function() {});
    $(this).addClass('active').html
    $('.middle-box button').removeClass('overlay');
    $('.left-box button, .right-box button').addClass('overlay');
    $('.middle-box img').removeClass('overlay');
    $('.left-box img, .right-box img').addClass('overlay');
    $('.middle-box p').removeClass('overlay');
    $('.left-box p, .right-box p').addClass('overlay');
    var elbuttom = e.currentTarget.id,
        elId = elbuttom.replace('-btn','');
    $('#grid-wrapper').find('input').attr('checked', false);
    $('.'+elId).find('input').attr('checked', true);
  })

  $('.right-box button').on('click', function(e){
    e.preventDefault();
    $('.button-press').not(this).removeClass('active').html(function() {});
    $(this).addClass('active').html
    $('.right-box button').removeClass('overlay');
    $('.left-box button, .middle-box button').addClass('overlay');
    $('.right-box img').removeClass('overlay');
    $('.left-box img, .middle-box img').addClass('overlay');
    $('.right-box p').removeClass('overlay');
    $('.left-box p, .middle-box p').addClass('overlay');
    var elbuttom = e.currentTarget.id,
        elId = elbuttom.replace('-btn','');
    $('#grid-wrapper').find('input').attr('checked', false);
    $('.'+elId).find('input').attr('checked', true);
  })
})


//SHOW/HIDE
// $(document).ready
// (on ('click', (function(){
//   $('.account-info').toggle();
// });



// $('.toggle-close').on('click', function(){
//   $('.toggle-info').show();
// })
// $('.toggle-close').on('click', function(){
// $('.toggle-info').hide();
// })


// GOOGLE ANALYTICS
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-23484466-2']);
_gaq.push(['_setDomainName', 'cigaraficionado.com']);
_gaq.push(['_setCustomVar',1,'Channel','cds_87688',3]);
_gaq.push(['_trackPageview','/cds/iso_order/87688']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
