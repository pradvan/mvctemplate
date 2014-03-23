TimeFeed.MainModel = {
	title: 'Time Feed',
	itemList: [],

	add: function(item){
		this.itemList[this.itemList.length] = item;
	},

	clear: function(){
		this.itemList = [];
	}
};