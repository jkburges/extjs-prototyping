GridPanel = Ext.extend(Ext.grid.GridPanel, {

    constructor: function(cfg) {
        var config = {
            enableHdMenu: false,
            store: new Ext.data.Store(),
            colModel: new Ext.grid.ColumnModel({
                defaults: {
                    width: 120,
                    sortable: false
                },
                columns: [
                    { header: 'name' },
                    { header: 'place' }
                ]
            }),
            bbar: new Ext.Toolbar({
                items: [
                    {
                        text: 'download'
                    },
                    {
                        text: 'clear'
                    }
                ]
            })
        };
        Ext.apply(config, cfg);

        GridPanel.superclass.constructor.call(this, config);
    }
});
