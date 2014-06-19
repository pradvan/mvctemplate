MVCTemplate.HomeView = {

	init: function(){
		console.log('HomeView.init');
	},

	render: function(){
		console.log('HomeView.render');

		var template = JST['app/templates/home.hbs'];
		var templateModal = JST['app/templates/modal.hbs'];

		$('#MVCTemplate').append(template({modalId: 'myModal'}));
		$('.container').prepend(templateModal({modalId: 'myModal'}));
	},

	destroy : function(){
		console.log('HomeView.destroy');
	}
};