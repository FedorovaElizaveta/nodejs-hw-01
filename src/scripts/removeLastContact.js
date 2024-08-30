import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      console.log('Contacts data should be an array');
      return;
    }

    if (contacts.length === 0) {
      console.log('There are no contacts to remove');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);

    console.log('The last contact was successtully removed!');
  } catch (err) {
    console.error('Error removing the last contact:', err);
  }
};

removeLastContact();
