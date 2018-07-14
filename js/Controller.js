// Controller.js
var C = {
	init: function() {
		V.build_nav();
		// init first page
		pages[0].init();
		$( ".burger" ).on( 'click', V.open_menu );
	}
};