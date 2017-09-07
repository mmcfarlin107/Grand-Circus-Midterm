
$(document).ready(function(){

//Adds is-active class to the div "selected" to utilize z-index

$('.wrapper').on('click', function(){
  $(this).find('.selected').toggleClass('is-active');

});

// changes form display:none to display:block to show form on click of an available seat

	$(".available").on("click", function() {
		$("form").addClass('is-active');


	});

// Adds a beenClicked class on the wrapper holding the seat images to be targeted when submitting the form
  $('.wrapper').on('click', function(){
    $(this).toggleClass('beenClicked');
  });

// On click of button creates object information
	var reservation = {

	};

  $("#button").on("click", function() {
       reservation.name = $("#name").val();
       reservation.phone = $("#phone_number").val();
       reservation.email = $("#email").val();
       reservation.yourSeat = $('.beenClicked').attr('id');
       //changes the selected seat image to a reserved seat image
       $('.beenClicked').html('<div><img src="images/takenseat.png" class="unavailable"></div');
       //ties the reservation object data to the seat
       $('.beenClicked').data(reservation);
        // console.log($('.beenClicked').data());
// below command removes user entry to clear form.
        $('input').val("");
// removes the class from unavailable seats so they no longer are put in the reservation.yourSeat object literal
       $('.wrapper').removeClass('beenClicked');


// console.log(reservation.yourSeat);
// console.log(reservation);

});

//When hovering on wrapper...we have to do a method that displays data tied to the wrapper
var seat = null;
$('.wrapper').mouseenter(function(){
  var name = $(this).data('name');
  seat = $(this).data('yourSeat');
  console.log(name + " "+ seat);
  $('#' + seat).html('<span class="hoverInfo"> Reserved for: ' + name + ' </span>');
  // $(this).append(name + ' ' + seat);
}).mouseleave(function() {
  $('#' + seat).html('<div><img src="images/takenseat.png" class="unavailable"></div>');
});















});
