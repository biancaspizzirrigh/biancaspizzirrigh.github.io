/*global jQuery:false */
jQuery(document).ready(function($) {	$(document).on('click', ".product-btn", function(e){		var prodname = $(this).data('prodname');		var prodprice = $(this).data('prodprice');				$("#prodorder").find('#prodname').val(prodname);		$("#prodorder").find('#prodprice').val(prodprice);		$("#prodorder").find("#order-error").hide();		$("#prodorder").modal("show");			});		$(document).on('submit', "#prodorderform", function(e){		e.preventDefault();		var datastring = $(this).serialize();		/*alert(datastring);*/				/*		$.post('send-order.php', datastring, function(data) {				alert(data);				data = JSON.parse(data);			  alert(JSON.stringify(data));			  if(data.status == "1")			  {				$("#order-error").html(data.message);				$("#order-error").removeClass("alert-danger");				$("#order-error").addClass("alert-success");				$("#order-error").show();				window.location.href = window.location.href;			  }			  else			  {				   $("#order-error").html(data.message);				  $("#order-error").removeClass("alert-success");				  $("#order-error").addClass("alert-danger");				  $("#order-error").show();			  }							});		*/						$("#order-error").html('Your order submitted successfully.');		$("#order-error").removeClass("alert-danger");		$("#order-error").addClass("alert-success");		$("#order-error").show();				return false;	});	
});