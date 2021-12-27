@isTest
public class SessionSpeakerTriggerTest {
    
    @testSetup
    static void testSetup() {
        List<Contact> speakers = new List<Contact>();
        List<Session__c> sessions = new List<Session__c>();
        List<String> rooms = new List<String>{'Keynote room', 'Theater', 'Breakout room A'};
        Integer i = 1;
        for (String room : rooms) {
            Contact speaker = new Contact(FirstName='Mock Speaker', LastName=String.valueOf(i));
        	Session__c session = new Session__c(Name='Mock Session ' + i, Date_and_Time__c=Datetime.now(), Room__c=room);
            speakers.add(speaker);
            sessions.add(session);
            i++;
        }
        insert speakers;        
        insert sessions;
        
        List<Session_Speaker__c> sessionSpeakers = new List<Session_Speaker__c>();
        for (i = 0; i < sessions.size(); i++) {
            Session_Speaker__c sessionSpeaker = new Session_Speaker__c(Speaker__c=speakers[i].Id, Session__c=sessions[i].Id);
            sessionSpeakers.add(sessionSpeaker);
        }
  		insert sessionSpeakers; 
    }
    
    @isTest
    static void helperMethodPositiveTest() {
   		Session__c session = new Session__c(Name='Test Session 1', Date_and_Time__c=Datetime.now(), Room__c='Keynote room');
        insert session;
        List<Session_Speaker__c> sessionSpeakers = [SELECT Name, Speaker__c, Session__c FROM Session_Speaker__c LIMIT 1];
        
       	Session_Speaker__c sessionSpeaker = new Session_Speaker__c(Speaker__c=sessionSpeakers[0].Speaker__c, Session__c=session.Id);
        /*List<Session_Speaker__c> testSpeakers = [SELECT Name, Session__r.Date_and_Time__c, Speaker__r.Name FROM Session_Speaker__c
            WHERE Session__r.Date_and_Time__c < :Datetime.now().addHours(1)
            AND Session__r.Date_and_Time__c > :Datetime.now().addHours(-1)];*/
    }	
}