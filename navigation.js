$(document).ready( function() {
    


   $(".dashboard-cont").show();
  $(".agenda-cont").hide();
  $(".diary-cont").hide();
  $(".health-cont").hide();
  $(".chat-cont").hide();
  $(".information-cont").hide();
  $(".settings-cont").hide();
  $(".contact-cont").hide();


$( ".dashboard-nav" ).click(function() {

    
  $(".dashboard-cont").show();
  $(".agenda-cont").hide();
  $(".diary-cont").hide();
  $(".health-cont").hide();
  $(".chat-cont").hide();
  $(".information-cont").hide();
  $(".settings-cont").hide();
  $(".contact-cont").hide();

});

$( ".agenda-nav" ).click(function() {

    
  $(".dashboard-cont").hide();
  $(".agenda-cont").show();
  $(".diary-cont").hide();
  $(".health-cont").hide();
  $(".chat-cont").hide();
  $(".information-cont").hide();
  $(".settings-cont").hide();
  $(".contact-cont").hide();

});
$( ".diary-nav" ).click(function() {


   $(".dashboard-cont").hide();
  $(".agenda-cont").hide();
  $(".diary-cont").show();
  $(".health-cont").hide();
  $(".chat-cont").hide();
  $(".information-cont").hide();
  $(".settings-cont").hide();
  $(".contact-cont").hide();


});
$( ".health-nav" ).click(function() {

   $(".dashboard-cont").hide();
  $(".agenda-cont").hide();
  $(".diary-cont").hide();
  $(".health-cont").show();
  $(".chat-cont").hide();
  $(".information-cont").hide();
  $(".settings-cont").hide();
  $(".contact-cont").hide();


});
$( ".chatroom-nav" ).click(function() {


   $(".dashboard-cont").hide();
  $(".agenda-cont").hide();
  $(".diary-cont").hide();
  $(".health-cont").hide();
  $(".chat-cont").show();
  $(".information-cont").hide();
  $(".settings-cont").hide();
  $(".contact-cont").hide();


});
$( ".information-nav" ).click(function() {
  

   $(".dashboard-cont").hide();
  $(".agenda-cont").hide();
  $(".diary-cont").hide();
  $(".health-cont").hide();
  $(".chat-cont").hide();
  $(".information-cont").show();
  $(".settings-cont").hide();
  $(".contact-cont").hide();

});
$( ".settings-nav" ).click(function() {
  
   $(".dashboard-cont").hide();
  $(".agenda-cont").hide();
  $(".diary-cont").hide();
  $(".health-cont").hide();
  $(".chat-cont").hide();
  $(".information-cont").hide();
  $(".settings-cont").show();
  $(".contact-cont").hide();

});
$( ".contact-nav" ).click(function() {

  $(".dashboard-cont").hide();
  $(".agenda-cont").hide();
  $(".diary-cont").hide();
  $(".health-cont").hide();
  $(".chat-cont").hide();
  $(".information-cont").hide();
  $(".settings-cont").hide();
  $(".contact-cont").show();

});
});