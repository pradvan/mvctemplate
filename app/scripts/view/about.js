MVCTemplate.AboutView = {

	init: function(){
		console.log('AboutView.init');
	},

	render: function(){
		console.log('AboutView.render');

		var template = JST['app/templates/about.hbs'];
		
		$('#MVCTemplate').append(template());
	},

	destroy : function(){
		console.log('AboutView.destroy');
	}
};