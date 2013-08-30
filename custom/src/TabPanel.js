TabPanel = Ext.extend(Ext.TabPanel, {
    constructor: function() {

        var config = {
            activeTab: 0,
            items: [
                {
                    title: 'one',
                    html: 'one one'
                },
                {
                    title: 'two',
                    html: 'two two'
                }
            ]
        };

        TabPanel.superclass.constructor.call(this, config);
    }
});
