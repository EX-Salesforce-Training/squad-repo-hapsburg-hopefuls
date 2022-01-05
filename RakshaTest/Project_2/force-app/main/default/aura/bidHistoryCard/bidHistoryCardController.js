({
    handleMessage: function(component, message, helper) {
        if (message != null && message.getParam("lmsData") != null) {
            component.set("v.recordId", message.getParam("lmsData"))
        }
    },
    // onResultHandler: function(component, event, helper) {
    //     helper.fetchResult(component);

    // }
});