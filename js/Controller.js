// Controller.js
var C = {
	init: function() {
		V.build_nav();
		// init first page
		pages[0].init();
		$( ".burger" ).on( 'click', V.open_menu );
		$( ".cog" ).on( 'click', function(e) {
			V.go_to_page( 'settings' );
		});
		$( "#close-nav" ).on( 'click', V.close_menu );
	}
};