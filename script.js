// Initial contacts data
let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
];

// Function to display contacts
const displayContacts = () => {
  const contactsDiv = document.getElementById("contacts");
  contactsDiv.innerHTML = ""; // Clear the current list
  contacts.forEach((contact) => {
    contactsDiv.innerHTML += `<p>${contact.name} - ${contact.phone} - ${contact.email}</p>`;
  });
};

// Function to add a new contact
const addContact = () => {
  let name = prompt("Enter contact name:");
  let phone = prompt("Enter contact phone:");
  let email = prompt("Enter contact email:");

  contacts.push({ name, phone, email });
  displayContacts();
};

// Function to find a contact
const findContact = () => {
  let name = prompt("Enter the name to search:");
  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (contact) {
    alert(
      `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
    );
  } else {
    alert("Contact not found.");
  }
};

// Function with callback to process each contact
const processContacts = (callback) => {
  contacts.forEach(callback);
};

// Change background color every 5 seconds
setInterval(() => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}, 5000);

// Use setTimeout to simulate a delay before displaying contacts
setTimeout(displayContacts, 1000);

// Log the number of contacts every 10 seconds
setInterval(() => {
  console.log(`Number of contacts: ${contacts.length}`);
}, 10000);

// Add contact button event listener
document.getElementById("addContact").addEventListener("click", () => {
  let action = prompt(
    "Type 'add' to add a contact or 'find' to search for a contact. Type 'exit' to quit."
  );
  while (action !== "exit") {
    if (action === "add") {
      addContact();
    } else if (action === "find") {
      findContact();
    } else {
      alert("Invalid input, please try again.");
    }
    action = prompt(
      "Type 'add' to add a contact or 'find' to search for a contact. Type 'exit' to quit."
    );
  }
});

// Find contact button event listener
document.getElementById("addContact").addEventListener("click", () => {
  let action = prompt(
    "Type 'add' to add a contact or 'find' to search for a contact. Type 'exit' to quit."
  );
  while (action !== "exit") {
    if (action === "add") {
      addContact();
    } else if (action === "find") {
      findContact();
    } else {
      alert("Invalid input, please try again.");
    }
    action = prompt(
      "Type 'add' to add a contact or 'find' to search for a contact. Type 'exit' to quit."
    );
  }
});

// Remove contact button event listener
document.getElementById("addContact").addEventListener("click", () => {
  let action = prompt(
    "Type 'add' to add a contact or 'find' to search for a contact. Type 'exit' to quit."
  );
  while (action !== "exit") {
    if (action === "add") {
      addContact();
    } else if (action === "find") {
      findContact();
    } else {
      alert("Invalid input, please try again.");
    }
    action = prompt(
      "Type 'add' to add a contact or 'find' to search for a contact. Type 'exit' to quit."
    );
  }
});

// Recursive function to search for a contact by name
const searchContactRecursive = (index, name) => {
  if (index >= contacts.length) {
    alert("Contact not found.");
    return;
  }
  if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
    alert(
      `Found: ${contacts[index].name} - ${contacts[index].phone} - ${contacts[index].email}`
    );
  } else {
    searchContactRecursive(index + 1, name);
  }
};

// Example usage of recursive search
// Uncomment to use
// let searchName = prompt("Enter name to search recursively:");
// searchContactRecursive(0, searchName);
