trigger Whiteboard on Contact (before insert) {
	// loop through new contacts and add fields to collections
	String[] newNames = new String[0];
    String[] newPhones = new String[0];
    String[] newEmails = new String[0];
    for (Contact newContact : trigger.new) {
        newNames.add(newContact.Name);
        newPhones.add(newContact.Phone);
        newEmails.add(newContact.Email);
    }
    
    // retrieve old duplicate contact fields inside of a collection using a soql statement
    Contact[] duplicates = [SELECT name, email, phone FROM Contact WHERE name IN :newNames OR phone IN :newPhones OR email IN :newEmails];
    
    // loop through the new contacts, and check collection of duplicates for any that match the new contact
    // if so, add error
    for (Contact newContact : trigger.new) {
        for (Contact oldContact : duplicates) {
            // if newContact field matches oldContact field, add error to that field
            // Issue: newContact.Name == oldContact.Name returns false no matter what.
            // Solution: use FirstName and LastName, Name is compound field.
            if (newContact.Name == oldContact.Name) {
                newContact.LastName.addError ('Existing contact with duplicate name found.');
            } else if (newContact.Phone == oldContact.Phone) {
                newContact.Phone.addError ('Existing contact with duplicate phone number found.');
            } else if (newContact.Email == oldContact.Email) {
                newContact.Email.addError ('Existing contact with duplicate email address found.');
            }
        }
    }
}