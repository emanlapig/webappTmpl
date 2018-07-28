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
				$( "#clear-settings" ).on( 'click', M.clear_settings );
				$( "div.swatch-group" ).on( 'click', function(e) {
					var theme = $( e.target ).attr( 'data-theme' ) || $( e.target ).parent().attr( 'data-theme' ) ;
					M.pages.settings.change_theme( theme );
					M.settings.theme = theme;
					M.save_settings();
				});
				if ( M.settings.hdr_eno ) {
					$( "#hdr-font" ).attr( "checked", "checked" );
				}
			},
			toggle_hdr_font: function() {
				var hdr_mono = $( "h2, h3" );
				for ( var i=0; i<hdr_mono.length; i++ ) {
					if ( $( hdr_mono[i] ).hasClass( "always" ) ) {
						continue;
					}
					var text = $( hdr_mono[i] ).text();
					if ( !$( hdr_mono[i] ).hasClass( "enoch-mono" ) ) {
						$( hdr_mono[i] ).addClass( "enoch-mono" );
					} else {
						$( hdr_mono[i] ).removeClass( "enoch-mono" );
					}
				}
			},
			change_theme: function( theme ) {
				var path = [ "css/min/theme_", theme, ".min.css" ].join( "" );
				$( "#theme-stylesheet" ).attr( 'href', path );
			}
		}
	},
	settings: {
		hdr_eno: false,
		theme: "turq"
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
		M.pages.settings.change_theme( M.settings.theme );
	},
	clear_settings: function() {
		window.localStorage.removeItem( "settings" );
		document.location.reload();
	}
};

// pages to go in the nav
var nav_pages = [
	M.pages.dashboard,
	M.pages.sample,
	M.pages.settings
];