TimeFeed.HomeView = {

	init: function(){
		console.log('HomeView.init');
	},

	render: function(){
		console.log('HomeView.render');

		var template = JST['app/templates/item.hbs'];

		$('#content').empty();
		
		$.each(TimeFeed.MainModel.itemList, function(index, val) {
			//console.log(val);
			
			$('#content').append(template(
				{
					title:val.headline,
					body: val.excerpt,
					url: val.url,
					thumb: val.image.thumbnail,
					tags: val.tags
				}));
		});
	},

	destroy : function(){
		console.log('destroy!');
	}
};