// Model.js
var M = {
	pages: {
		init: function( page ) {
			var page = this[ page ];
			page.init();
		},
		dashboard: {
			title: "Dashboard",
			selector: "dashboard",
			init: function() {
				$( "#subpage-link" ).on( 'click', function(e) {
					V.go_to_page( 'subpage' );
				});
				$( "#dash-item-0" ).on( 'click', function(e) {
					V.go_to_page( 'sample' );
				});
			}
		},
		sample: {
			title: "Custom Font",
			selector: "sample",
			init: function() {

			}
		},
		subpage: {
			title: "Sub Page",
			selector: "subpage",
			init: function() {

			}
		},
		settings: {
			title: "Settings",
			selector: "settings",
			init: function() {
				$( "#hdr-font" ).on( 'click', function(e) {
					M.pages.settings.toggle_hdr_font();
					M.settings.hdr_eno = ( M.settings.hdr_eno )? false : true;
					M.save_settings();
				});
				if ( M.settings.hdr_eno ) {
					$( "#hdr-font" ).attr( "checked", "checked" );
				}
			},
			toggle_hdr_font: function(e) {
				var hdr_mono = $( "h2, h3" );
				for ( var i=0; i<hdr_mono.length; i++ ) {
					if ( $( hdr_mono[i] ).hasClass( "always" ) ) {
						continue;
					}
					var text = $( hdr_mono[i] ).text();
					$( hdr_mono[i] ).text( text.split( "" ).reverse().join( "" ) );
					if ( !$( hdr_mono[i] ).hasClass( "enoch-mono" ) ) {
						$( hdr_mono[i] ).addClass( "enoch-mono" );
					} else {
						$( hdr_mono[i] ).removeClass( "enoch-mono" );
					}
				}
			}
		}
	},
	settings: {
		hdr_eno: false
	},
	save_settings: function() {
		window.localStorage.setItem( "settings", JSON.stringify( M.settings ) );
	},
	load_settings: function() {
		if ( window.localStorage.getItem( "settings" ) ) {
			M.settings = JSON.parse( window.localStorage.getItem( "settings" ) );
		} else {
			M.save_settings();
		}
	},
	apply_settings: function() {
		if ( M.settings.hdr_eno ) {
			M.pages.settings.toggle_hdr_font();
		}
	},
};

// pages to go in the nav
var nav_pages = [
	M.pages.dashboard,
	M.pages.sample,
	M.pages.settings
];