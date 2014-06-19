MVCTemplate.MainModel = {
	title: 'MVCTemplate',
	itemList: [],

	add: function(item){
		this.itemList[this.itemList.length] = item;
	},

	clear: function(){
		this.itemList = [];
	}
};