public class AccountUtility {
    public static void viewAnnualRevenue() {
        Account[] accountsList = [SELECT Id, Name, AnnualRevenue FROM Account];
        for (Account account : accountsList) {
            String acctRev = account.Name + ':' + account.AnnualRevenue;
            System.debug(acctRev);
        }
    }
}