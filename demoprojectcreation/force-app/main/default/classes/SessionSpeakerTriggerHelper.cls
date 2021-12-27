public class SessionSpeakerTriggerHelper {
    public static void helperMethod(List<Session_Speaker__c> sessionSpeakers) {
        // Iterate through each session speaker and get a list of all upcoming sessions involving
        // the speaker within an hour. If the list size is greater than zero, reject the record.
        List<Id> sessionIds = new List<Id>();
        for (Session_Speaker__c sS : sessionSpeakers) {
            sessionIds.add(sS.session__c);
        }
        List<Session__c> sessionTimes = [SELECT Date_and_Time__c FROM Session__c WHERE Id=:sessionIds];
        Integer i = 0;
        for (Session_Speaker__c sS : sessionSpeakers) {
            Datetime sessionTimeLowerBound = sessionTimes[i].Date_and_Time__c.addHours(-1);
            Datetime sessionTimeUpperBound = sessionTimes[i].Date_and_Time__c.addHours(1);
            System.debug(sessionTimeLowerBound);
            System.debug(sessionTimeUpperBound);
            List<Session_Speaker__c> conflicts = [SELECT Name FROM Session_Speaker__c
                                                  WHERE Session__r.Date_and_Time__c > :sessionTimeLowerBound
                                                  AND Session__r.Date_and_Time__c < :sessionTimeUpperBound];
            System.debug(conflicts);
            if (conflicts.size() > 0) {
                sS.addError('Existing session found for speaker. Please allow an hour for each session.');
            }
            i++;
		}
    }
}