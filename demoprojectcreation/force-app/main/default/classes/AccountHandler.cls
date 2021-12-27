public class AccountHandler {
    public static void insertAccount(Integer numAccts) {
        Account[] addAccounts = new Account[0];
        Integer n = 0;
        while (n < numAccts) {
            Account a = new Account();
            a.Name = 'Acme Inc ' + n;
            a.AccountNumber = 'A000' + n;
            addAccounts.add(a);
            n++;
        }
        insert addAccounts;
    }
}