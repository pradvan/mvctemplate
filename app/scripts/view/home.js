MVCTemplate.HomeView = {

	init: function(){
		console.log('HomeView.init');
	},

	render: function(){
		console.log('HomeView.render');

		var template = JST['app/templates/home.hbs'];
		$('#MVCTemplate').append(template());
	},

	destroy : function(){
		console.log('HomeView.destroy');
	}
};