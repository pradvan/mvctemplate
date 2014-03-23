TimeFeed.MainController = {
	
	init: function(){
		console.log('MainController.init');

		$(TimeFeed).on('trigger_renderfeeds', $.proxy(this.renderFeeds, this));

		
		$.address.change(function(event) {  
		    // do something depending on the event.value property, e.g.  
		    // $('#content').load(event.value + '.xml');  
		    console.log('change: ' + event.value)

		    switch(event.value){

		    	case '/':
		    		TimeFeed.FeedController.loadDefault();
		    	break;

		    	case '/feed1':
		    		TimeFeed.FeedController.loadCategory('feed1');
		    	break;

		    	case '/feed2':
		    		TimeFeed.FeedController.loadCategory('feed2');
		    	break;

		    	case '/feed3':
		    		TimeFeed.FeedController.loadCategory('feed3');
		    	break;

		    }
		});  
	},

	renderFeeds: function(){
		TimeFeed.HomeView.render();
	}
};