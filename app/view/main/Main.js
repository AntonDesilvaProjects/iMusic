/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('iMusic.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'iMusic.view.ArtistSearchResultsGrid',
        'iMusic.model.ArtistsModel',
        'iMusic.store.ArtistsStore',
        'iMusic.view.AlbumsGrid',
        'iMusic.view.SearchPanel',
        'iMusic.view.AlbumInfoPanel',
        'iMusic.controller.iMusicController'
    ],
    width : 950,
    xtype: 'widget.app-main',
    
    controller: 'musicCtrl',

    layout: {
        type: 'table',
        columns : 2
    },

    initComponent : function(){
        this.searchPanel = Ext.widget('searchPanel', {
             colspan : 1,
             reference : 'searchPanel'
        });
        this.albumInfoPanel = Ext.widget('albumInfoPanel', {
            colspan : 1,
            rowspan : 3
        });
        this.artistResultsGrid = Ext.widget('artistResultsGrid', {
            reference : 'artistResults'
        });
        this.albumsGrid = Ext.widget('albumsGrid', {
            reference : 'albumsGrid'
        });
        this.btn = Ext.widget('button', {
            text : 'Resize',
            me : this,
            handler : function(){
                if(this.me.albumInfoPanel.isVisible()){
                    this.me.layout.columns = 1;
                    this.me.albumInfoPanel.hide();

                    //Increase size of other panels
                    this.me.searchPanel.width = 1150;
                    this.me.artistResultsGrid.width = 1000;
                    this.me.albumsGrid.width = 1150;
                    this.me.doLayout();
                }
                else
                {
                    this.me.searchPanel.width = 700;
                    this.me.artistResultsGrid.width = 700;
                    this.me.albumsGrid.width = 700;
                    this.me.layout.columns = 2;
                    this.me.albumInfoPanel.show();
                    this.me.doLayout();
                }
            }
        });

        this.items = [this.searchPanel, this.albumInfoPanel, this.artistResultsGrid, this.albumsGrid, this.btn,
        {
            xtype : 'button',
            text : 'click',
            reference : 'btn'
        }];
        this.callParent(arguments);
    },

    /*items: [
        {
            xtype : 'searchPanel',
            colspan : 1
        },
        {
            xtype : 'albumInfoPanel',
            colspan : 1,
            rowspan : 3
        },
        {
            xtype : 'artistResultsGrid'
        },
        {
            xtype : 'albumsGrid'
        },
        {
            xtype : 'button',
            text : 'manage',
            handler : function() {

            }
        }
        /*,    
        {
            xtype : 'gridpanel',
            title: 'Simpsons',
            store : Ext.create('Ext.data.Store', {
                fields:['name', 'email', 'phone'],
                data:[
                        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
                ]
            }) ,
            columns: [
                { text: 'Name',  dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone' }
            ],
            height: 200,
            width: 400
        },
        {
            xtype : 'gridpanel',
            title: 'Simpsons',
            store : Ext.create('Ext.data.Store', {
                fields:['name', 'email', 'phone'],
                data:[
                        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
                ]
            }) ,
            columns: [
                { text: 'Name',  dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone' }
            ],
            height: 200,
            width: 400
        }

    ]*/
});
