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
                    items: [
                        new Ext.Button({ text: 'click me' })
                    ]
                },
            ]
        };

        TabPanel.superclass.constructor.call(this, config);
    }
});
