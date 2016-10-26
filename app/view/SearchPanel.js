Ext.define('iMusic.view.SearchPanel', {
	extend : 'Ext.panel.Panel',
	height : 50,
	width : 700,
	xtype : 'searchPanel',
	layout : 'hbox',
	items : [
		{
			xtype : 'textfield', 
			emptyText : 'Enter Artist name',
			margin : '10 10 10 200'
		},
		{
			xtype : 'button',
			text : 'Search',
			margin : '10 10 10 10'
		}
	]
});