// console.log("Welcom Lu4ik!!!");

const contacts = require("./contacts")

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      console.log(listContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" })
// invokeAction({action: "get", id: "1"})
invokeAction({ action: "add", name: "Mango", email: "mango@mail.com", phone: "322-22-22" })
