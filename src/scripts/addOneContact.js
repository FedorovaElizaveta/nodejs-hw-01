import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      console.log('Contacts data should be an array');
      return;
    }

    const newContact = createFakeContact();
    contacts.push(newContact);

    await writeContacts(contacts);
    console.log('Successfully added the contact!');
  } catch (err) {
    console.error('Error adding the contact:', err);
  }
};

addOneContact();
