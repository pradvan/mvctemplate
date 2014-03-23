var TimeFeed = {
	
	// Application Constructor
    startup: function() {
       console.log('TimeFeed.startup');
       
       TimeFeed.FeedController.init();
       TimeFeed.MainController.init();
    }
};