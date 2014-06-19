MVCTemplate.MainController = {
	
	init: function(){
		console.log('MainController.init');

		$.address.change(function(event) {
			console.log('MainController.change: ' + event.value)

			$('#MVCTemplate').empty();

			switch(event.value){
				case '/':
					MVCTemplate.HomeView.render();
				break;

				case '/home':
					MVCTemplate.HomeView.render();
				break;

				case '/about':
					MVCTemplate.AboutView.render();
				break;
			}
		});
	}
};