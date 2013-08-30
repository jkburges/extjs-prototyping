TabPanel = Ext.extend(Ext.TabPanel, {
    constructor: function() {

        var config = {
            activeTab: 0,
            items: [
                new GridPanel({
                    title: 'grid'
                }),
                {
                    title: 'panel',
                    html: 'blah blah'
                },
            ]
        };

        TabPanel.superclass.constructor.call(this, config);
    }
});
