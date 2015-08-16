//Caching the element IDs
var Banner = Banner || {}, addListeners, exitHandler, mainClick = document.getElementById('main-click'), cta = document.getElementById('cta');

Banner.init = function(){
	//Add the listeners for the clicks, and start the animation
	addListeners();
	Banner.animate();		
};

Banner.animate = function(){
	var d = 2; //delay in seconds before the animation should start.

	TweenLite.to('#beach', 2.5, {x:180, opacity:1, delay: d});
	TweenLite.from('#copy-1', 1.5, {x:300,delay: d+0.5});
	TweenLite.to('#copy-1', 1.5, {opacity:1, delay: d+0.5});

	TweenLite.to(['#beach','#copy-1'], 0.5, {opacity:0, delay: d+5});

	d = d + 5;

	TweenLite.to('#mountain', 2.5, {x:-180, opacity:1, delay: d});
	TweenLite.from('#copy-2', 1.5, {x:-300,delay: d+0.5});
	TweenLite.to('#copy-2', 1.5, {opacity:1, delay: d+0.5});

	TweenLite.to(['#mountain','#copy-2'], 0.5, {opacity:0, delay: d+5});

	d = d + 5;

	TweenLite.to(['#orangutan','#copy-3'], 1, {alpha:1, delay: d});
	TweenLite.to('#cta', 1, {alpha:1, delay: d+1});

};

//Add Event Listeners, should probably put this in the Index.html, so clicks can be tracked even if the animation doesn't load.
addListeners = function() {
	mainClick.addEventListener('click', exitHandler, false);
	cta.addEventListener('click', exitHandler, false);
};

exitHandler = function(e) {
	var exit = e.target.id;
	switch(exit){
		case 'backup':
			Enabler.exit('BACKUP_EXIT');
		break;
		case 'cta':
			Enabler.exit('CTA_EXIT');
		break;
		case 'main-click':
		default:
			Enabler.exit('DEFAULT_EXIT');
		break;
	}
};