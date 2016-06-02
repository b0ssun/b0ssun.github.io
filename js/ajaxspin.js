$(document).click(function () {
    // add loading image to div
    $('#loading').html('<img src="img/ajax-loader.gif">');
		$('#loading').load('dieng.html');    
});