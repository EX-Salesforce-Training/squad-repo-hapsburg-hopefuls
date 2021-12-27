trigger SessionSpeakerTrigger on Session_Speaker__c (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
	// Trigger that validates session speaker after it is created on a session
    switch on Trigger.OperationType {
        
        when BEFORE_INSERT, BEFORE_UPDATE {
            SessionSpeakerTriggerHelper.helperMethod(Trigger.new);
        }
        
		when else {

		}
    }
}