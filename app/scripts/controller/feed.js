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
		var url = 'feeds/timeinc/all.json';
		this.load(url);
	},

	load: function(path){
		console.log('FeedController.load');
		console.log('	API: ' + path);

		var self = this;
		var url = (this.useLocalFeeds) ? '' : 'http://www.site.com';
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

		//$(TimeFeed).trigger('trigger_renderfeeds');
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