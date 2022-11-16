$(document).ready(function{
	$('.facility').magnificPopup({
	delegate:'a',
	type:'image',
	gallery:{
		enabled:true;
	}
});
$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth:'600'
  });
  });
  function validateform()
{
	var x=document.forms["myform"]["fname"].value;
	var y=document.getElementById('phonenum').value;
	var z=document.getElementById('email').value;
	
	if (x=="" && y=="" && z=="") {
    text = "please fill all detail";
	return false;
  }
  else
  {
	  text="your appointment booked"
  }
  document.getElementById('demo').innerHTML = text;
}
});




