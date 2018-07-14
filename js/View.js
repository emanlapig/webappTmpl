// View.js
var V = {
	build_nav: function() {
		for ( var i=0; i<pages.length; i++ ) {
			var link = this.el_factory({
				tag: 'a',
				attrs: [
					{ attr: 'href', val: 'javascript:0;' },
					{ attr: 'data-selector', val: pages[i].selector }
				],
				html: pages[i].title,
			});
			$( "#nav-menu" ).append( link );
			$( link ).on( 'click', function(e) {
				V.go_to_page( $( e.target ).attr( 'data-selector' ) );
				V.open_menu();
			});
		}
	},
	go_to_page: function( to ) {
		var from = $( ".page" );
		for ( var i=0; i<from.length; i++ ) {
			if ( $( from[i] ).hasClass( "show" ) ) {
				$( from[i] ).removeClass( "show" ).addClass( "hidden" );
			}
		}
		setTimeout( function() {
			$( [ "#", to ].join( "" ) ).removeClass( "hidden" ).addClass( "show" );
			M.pages[ to ].init();
		}, 500 );
	},
	open_menu: function() {
		if ( !$( "#nav-menu" ).hasClass( "reveal" ) ) {
			$( "#nav-menu" ).addClass( "reveal" );
			$( "#viewport" ).addClass( "nav-open" );
		} else {
			$( "#nav-menu" ).removeClass( "reveal" );
			$( "#viewport" ).removeClass( "nav-open" );
		}
	},
	el_factory: function( _opts ) {
		var options = _opts
			, tag = options.tag
			, attrs = options.attrs
			, html = options.html
		if ( !tag ) {
			return false;
		}
		var node = document.createElement( tag );
		if ( attrs ) {
			for ( var i=0; i<attrs.length; i++ ) {
				node.setAttribute( attrs[i].attr, attrs[i].val );
			}
		}
		if ( html ) {
			node.innerHTML = html;
		}
		return node;
	}
};