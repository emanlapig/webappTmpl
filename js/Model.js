// Model.js
var M = {
	pages: {
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

			}
		}
	}
};

// pages to go in the nav
var nav_pages = [
	M.pages.dashboard,
	M.pages.sample,
	M.pages.settings
];