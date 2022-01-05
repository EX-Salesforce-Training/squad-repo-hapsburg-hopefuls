({
    doInit: function(component, event, helper) {
        const columns = [
            { label: 'User', fieldName: 'CreatedById', type: 'text' },
            { label: 'Bid', fieldName: 'Price__c', type: 'Currency' },
            { label: 'Placed On', fieldName: 'CreatedDate', type: 'Date' },
        ];
        component.set("v.columns", columns);
        //get previous result

        helper.fetchResult(component);

    },
    handleMessage: function(component, event, helper) {
        if (message != null && message.getParam("lmsData") != null) {
            component.set("!V.recordIdFromMsgChannel", message.getParam("lmsData").value)
        }
    },
    onResultHandler: function(component, event, helper) {
        helper.fetchResult(component);

    }

});