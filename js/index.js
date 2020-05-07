lightRoute.init({
	error404: '/404'
});

window.addEventListener('lrRouteBegin', function(e){
	console.log('RouterBegin', e.detail);
});

window.addEventListener('lrRouteEnd', function(e){
	console.log('RouterEnd', e.detail);
});