public with sharing class BidHistoryController {
	@AuraEnabled(cacheable=true)
	public static List<Bid__c> getResults(Id recId) {
					
	//List<Auction__c> auctionId= [SELECT ID,Name FROM Auction__c];
					
	List<Bid__c> results = [SELECT Id, Name, Price__c,  Auction__c, Auction__r.Name, CreatedById, CreatedDate FROM Bid__c WHERE Auction__c=: recId]; 
													
					 
	return results;
	}
	
}
