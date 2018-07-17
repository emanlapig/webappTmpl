// Model.js
var M = {
	pages: {
		dashboard: {
			title: "Dashboard",
			selector: "dashboard",
			init: function() {

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