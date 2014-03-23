TimeFeed.FeedController = {

	useLocalFeeds: true,

	init: function(){
		console.log('FeedController.init');

		this.bind();
	},

	bind: function(){
		$(TimeFeed).on('sometrigger', $.proxy(this.feedTrigger, this));
	},

	unbind: function(){
		$(TimeFeed).off('sometrigger', $.proxy(this.feedTrigger, this));
	},

	feedTrigger: function(){
		console.log('FeedController.feedTrigger');
	},

	loadDefault: function(){
		// remote feeds
		//var url = 'http://api.dev.1bot.co/feeds/timeinc/si.json';
		//var url = 'http://api.dev.1bot.co/feeds/timeinc/health.json';
		
		// local feeds
		// var url = 'feeds/timeinc/allyou.json';
		// var url = 'feeds/timeinc/cookinglight.json';
		// var url = 'feeds/timeinc/heath.json';
		// var url = 'feeds/timeinc/people.json';
		// var url = 'feeds/timeinc/peoplestylewatch.json';
		var url = 'feeds/timeinc/all.json';

		this.load(url);
	},

	loadCategory:function(cat){
		console.log('FeedController.loadCategory');
		console.log('	cat: ' + cat);

		var catURL;

		switch(cat){
			case '/':
				catURL = 'feeds/timeinc/all.json';
			break;

			case 'feed1':
				catURL = 'feeds/timeinc/allyou.json';
			break;

			case 'feed2':
				catURL = 'feeds/timeinc/cookinglight.json';
			break;

			case 'feed3':
				catURL = 'feeds/timeinc/health.json';
			break;
		}

		this.load(catURL);
	},

	load: function(path){
		console.log('FeedController.load');
		console.log('	API: ' + path);

		var self = this;
		var url = (this.useLocalFeeds) ? '' : 'http://api.dev.1bot.co/';
		var successCallback = $.proxy(this.onLoadCompleted, this);
	    var errorCallback = $.proxy(this.onLoadError, this);
	    var	formData = '';

	    url += path;

		$.ajax({
			url: url,
			type: 'GET',
			data : formData,
			cache: false,
			async: true,
			dataType: 'json',
			success: successCallback,
			error: errorCallback
		});
	},

	onLoadCompleted: function(response){
		console.log('FeedController.onLoadCompleted');
		console.dir(response);

		TimeFeed.MainModel.clear();

		$.each(response.trending, function(index, val) {
			 //console.log(val);
			 TimeFeed.MainModel.add(val);
		});

		$(TimeFeed).trigger('trigger_renderfeeds');
	},

	onLoadError: function(xhr, status, error){
		console.log('FeedController.onLoadError');
		console.dir(xhr);

		$('#myModalTitle').html('Feed Error');
		$('#myModalBody').html('There was a problem with the feed. Server says: ' + status);
		$('#myModal').modal();
	},

	destroy: function(){
		this.unbind();
	}
};