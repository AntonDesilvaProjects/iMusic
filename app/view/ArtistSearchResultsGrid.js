Ext.define('iMusic.view.ArtistSearchResultsGrid', {
	extend : 'Ext.grid.Panel',
	xtype : 'artistResultsGrid',
	title : 'Artists',//'17 Results found for "Eagles"',
	store : 'iMusic.store.ArtistsStore' ,
	width : '100%',//700,
	height : 425,
	columns : [
		{ 
			text : 'Image', 
			dataIndex : 'artistImage', 
			renderer: function(value){
       			 return '<img src="' + value + '" />';
   	 		}, 
   	 		flex : 2 
   	 	},
		{ text : 'Name', dataIndex : 'name', flex : 2.5},
		{ text : 'Last FM URL', dataIndex : 'url', flex : 4},
		{ text : 'Listener Count', dataIndex : 'listeners', flex : 4},
	]
});