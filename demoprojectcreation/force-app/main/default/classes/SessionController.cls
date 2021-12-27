public with sharing class SessionController {
    @AuraEnabled(cacheable=true)
    public static List<Session__c> getSessions(String searchKey) {
        if (String.isBlank(searchKey)) {
            // List<Session__c> results = [SELECT Name FROM Session__c];

            // List<Session__c> filteredSessions = new List<Session__c>();
            // for (Session__c session : results) {
            //     Session__c newSession = new Session__c(Name = session.Name);
            //     filteredSessions.add(newSession);
            // }
            // return filteredSessions;
            return [SELECT Id, Name, toLabel(Room__c), Description__c, format(Date_and_Time__c) dateTime,
            (SELECT Speaker__r.Id, Speaker__r.Name, Speaker__r.Description, Speaker__r.Email, Speaker__r.Picture_URL__c FROM Session_Speakers__r)
            FROM Session__c ORDER BY Date_and_Time__c LIMIT 100];
        } else {
            String key = '%' + searchKey + '%';
            return [SELECT Id, Name, toLabel(Room__c), Description__c, format(Date_and_Time__c) dateTime,
            (SELECT Speaker__r.Id, Speaker__r.Name, Speaker__r.Description, Speaker__r.Email, Speaker__r.Picture_URL__c FROM Session_Speakers__r)
            FROM Session__c WHERE Name LIKE :key ORDER BY Date_and_Time__c LIMIT 100];
        }
    }
    @AuraEnabled(cacheable=true)
    public static Session__c getSession(Id sessionId) {
        List<Session__c> sessions = [SELECT Id, Name, toLabel(Room__c), Description__c, format(Date_and_Time__c) dateTime,
        (SELECT Speaker__r.Id, Speaker__r.Name, Speaker__r.Description, Speaker__r.Email, Speaker__r.Picture_URL__c FROM Session_Speakers__r)
        FROM Session__c WHERE Id = :sessionId];
        if (sessions.size() != 1) {
            throw new AuraHandledException('Could not find session');
        }
        return sessions[0];
    }
}