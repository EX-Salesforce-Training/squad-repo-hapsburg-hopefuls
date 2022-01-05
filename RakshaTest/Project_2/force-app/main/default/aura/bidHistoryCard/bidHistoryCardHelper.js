({
    fetchResult: function(component) {
        const action = component.get("c.getResults");
        action.setParams({ "recId": component.get("v.recordId") })
        action.setCallback(this, function(response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                const resp = response.getReturnValue();
                //set returnValue to data attribute
                component.set("v.data", resp);
            }
        });
        $A.enqueueAction(action);

    }
})