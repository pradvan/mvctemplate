TimeFeed.HomeView = {

	init: function(){
		console.log('HomeView.init');
	},

	render: function(){
		console.log('HomeView.render');

		var template = JST['app/templates/home.hbs'];
		$('#content').append(template());
	},

	destroy : function(){
		console.log('HomeView.destroy');
	}
};