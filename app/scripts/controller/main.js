TimeFeed.MainController = {
	
	init: function(){
		console.log('MainController.init');

		$.address.change(function(event) {
		    console.log('MainController.change: ' + event.value)

		    $('#content').empty();
		    
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