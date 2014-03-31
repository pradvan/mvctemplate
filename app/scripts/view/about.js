TimeFeed.AboutView = {

	init: function(){
		console.log('AboutView.init');
	},

	render: function(){
		console.log('AboutView.render');

		var template = JST['app/templates/about.hbs'];
		$('#content').append(template());
	},

	destroy : function(){
		//console.log('AboutView.destroy');
	}
};