import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const contactIsPluralOrNot = (number) => {
  const result = number === 1 ? 'contact' : 'contacts';
  return result;
};

const generateContacts = async (number) => {
  const parsedNumber =
    typeof number === 'number' ? number : parseInt(number, 10);

  if (isNaN(parsedNumber) || parsedNumber <= 0) {
    console.log('Please provide a valid positive number of contacts to add');
    return;
  }

  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      console.log('Contacts data should be an array');
      return;
    }

    for (let i = 0; i < parsedNumber; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await writeContacts(contacts);

    console.log(
      `Successfully added ${parsedNumber} ${contactIsPluralOrNot(
        parsedNumber,
      )}!`,
    );
  } catch (err) {
    console.error(
      `Error generating the ${contactIsPluralOrNot(parsedNumber)}:`,
      err,
    );
  }
};

generateContacts(5);
