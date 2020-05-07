function findGetParameter(parameterName) {
	var result = null,
		tmp = [];
	location.search
		.substr(1)
		.split("&")
		.forEach(function (item) {
			tmp = item.split("=");
			if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
		});
	return result;
}
var lightRoute = {

	init: function (config = {error404: '/'}) {

		console.log('%cLightRoute %c Initialized!', "color: white; background-color:#6F58C9;padding:5px;font-weight:bold;font-family:Helvetica;border-radius:4px 0 0 4px", "color: black;background-color: #f2f2f2;padding:5px;font-family:Helvetica;border-radius:0 4px 4px 0;font-weight:bold;");

		var active_url = (window.location.href).split('/');
		var active_page = active_url[active_url.length - 1];

		if (active_page == '') {
			document.querySelector('[router-page][router-root="true"]').style.display = 'block';
			
			var router_pages = document.querySelectorAll('[router-page]:not([router-root])');
			for (var i = 0; i < router_pages.length; i++) {
				router_pages[i].style.display = 'none';
			}
		} else {

			if (document.querySelectorAll('[router-page="/' + active_page + '"]').length == 0) {
				console.log('%cLightRoute %c Could not find Route /' + active_page + "!", "color: white; background-color:#6F58C9;padding:5px;font-weight:bold;font-family:Helvetica;border-radius:4px 0 0 4px;border-top:1px solid red;border-left:1px solid red;border-bottom:1px solid red;user-select:none;", "color: black;background-color: #f2f2f2;padding:5px;font-family:Helvetica;border-radius:0 4px 4px 0;font-weight:bold;border-top:1px solid red;border-right:1px solid red;border-bottom:1px solid red;");
				console.log('%cLightRoute %c Going to 404', "color: white; background-color:#6F58C9;padding:5px;font-weight:bold;font-family:Helvetica;border-radius:4px 0 0 4px;border-top:1px solid red;border-left:1px solid red;border-bottom:1px solid red;user-select:none;", "color: black;background-color: #f2f2f2;padding:5px;font-family:Helvetica;border-radius:0 4px 4px 0;font-weight:bold;border-top:1px solid red;border-right:1px solid red;border-bottom:1px solid red;");
			
				document.querySelector('[router-page][router-page="' + config.error404 + '"]').style.display = 'block';
			
				var router_pages = document.querySelectorAll('[router-page]:not([router-page="' + config.error404 + '"])');
				for (var i = 0; i < router_pages.length; i++) {
					router_pages[i].style.display = 'none';
				}
			} else {
				var router_pages = document.querySelectorAll('[router-page]');
				for (var i = 0; i < router_pages.length; i++) {
					router_pages[i].style.display = 'none';
				}
				document.querySelector('[router-page="/' + active_page + '"]').style.display = 'block';
			}

		}



		var router_links = document.querySelectorAll('[router-link]');
		for (var i = 0; i < router_links.length; i++) {
			router_links[i].addEventListener('click', function (e) {

				var lrRouteBegin = new CustomEvent('lrRouteBegin', { detail: e.path[0].pathname });
				window.dispatchEvent(lrRouteBegin);

				history.pushState({}, '', e.path[0].pathname);

				if (document.querySelectorAll('[router-page="' + e.path[0].pathname + '"]').length == 0) {
					console.log('%cLightRoute %c Could not find Route ' + e.path[0].pathname + "!", "color: white; background-color:#6F58C9;padding:5px;font-weight:bold;font-family:Helvetica;border-radius:4px 0 0 4px;border-top:1px solid red;border-left:1px solid red;border-bottom:1px solid red;user-select:none;", "color: black;background-color: #f2f2f2;padding:5px;font-family:Helvetica;border-radius:0 4px 4px 0;font-weight:bold;border-top:1px solid red;border-right:1px solid red;border-bottom:1px solid red;");
					console.log('%cLightRoute %c Going to 404', "color: white; background-color:#6F58C9;padding:5px;font-weight:bold;font-family:Helvetica;border-radius:4px 0 0 4px;border-top:1px solid red;border-left:1px solid red;border-bottom:1px solid red;user-select:none;", "color: black;background-color: #f2f2f2;padding:5px;font-family:Helvetica;border-radius:0 4px 4px 0;font-weight:bold;border-top:1px solid red;border-right:1px solid red;border-bottom:1px solid red;");
				
					document.querySelector('[router-page][router-page="' + config.error404 + '"]').style.display = 'block';
				
					var router_pages = document.querySelectorAll('[router-page]:not([router-page="' + config.error404 + '"])');
					for (var i = 0; i < router_pages.length; i++) {
						router_pages[i].style.display = 'none';
					}
				} else {
					var router_pages_hide = document.querySelectorAll('[router-page]:not([router-page="' + e.path[0].pathname + '"])');
					for (var i = 0; i < router_pages_hide.length; i++) {
						router_pages_hide[i].style.display = 'none';
					}
					var router_pages_show = document.querySelectorAll('[router-page="' + e.path[0].pathname + '"]');
					for (var i = 0; i < router_pages_show.length; i++) {
						router_pages_show[i].style.display = 'block';
					}
				}

				var lrRouteEnd = new CustomEvent('lrRouteEnd', { detail: e.path[0].pathname });
				window.dispatchEvent(lrRouteEnd);

				e.preventDefault();
			});
		}

	}


};