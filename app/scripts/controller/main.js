TimeFeed.MainController = {
	
	init: function(){
		console.log('MainController.init');

		$(TimeFeed).on('trigger_renderfeeds', $.proxy(this.renderFeeds, this));

		
		$.address.change(function(event) {
		    console.log('MainController.change: ' + event.value)

		    switch(event.value){
		    	case '/':
		    		TimeFeed.HomeView.render();
		    	break;

		    	case '/home':
		    		TimeFeed.HomeView.render();
		    	break;

		    	case '/about':
		    		TimeFeed.AboutView.render();
		    	break;
		    }
		});  
	}
};