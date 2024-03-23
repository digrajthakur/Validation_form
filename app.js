
  let entries = [];

  document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = document.getElementById("userForm");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!isValidEmail(email) || !isValidName(name)) {
      document.getElementById("error").innerText = "Please enter a valid name and email.";
      return;
    }

    const gender = document.getElementById("gender").value;
    const role = document.getElementById("role").value;
    const permissions = [];
    if (document.getElementById("add").checked) {
      permissions.push("Add");
    }
    if (document.getElementById("edit").checked) {
      permissions.push("Edit");
    }
    if (document.getElementById("delete").checked) {
      permissions.push("Delete");
    }
    entries.push({ name, email, gender, role, permissions });
    displayEntries();
    form.reset();
    document.getElementById("error").innerText = "";
  });

  function isValidEmail(email) {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function isValidName(name) {
    // Basic name validation (at least 2 characters)
    return name.length >= 2;
  }

  function displayEntries() {
    const table = document.getElementById("dataTable");
    table.innerHTML = "";
    const headerRow = table.insertRow(0);
    headerRow.insertCell(0).outerHTML = "<th>Name</th>";
    headerRow.insertCell(1).outerHTML = "<th>Email</th>";
    headerRow.insertCell(2).outerHTML = "<th>Gender</th>";
    headerRow.insertCell(3).outerHTML = "<th>Role</th>";
    headerRow.insertCell(4).outerHTML = "<th>Permissions</th>";
    entries.forEach((entry, index) => {
      const row = table.insertRow(index + 1);
      row.insertCell(0).innerText = entry.name;
      row.insertCell(1).innerText = entry.email;
      row.insertCell(2).innerText = entry.gender;
      row.insertCell(3).innerText = entry.role;
      row.insertCell(4).innerText = entry.permissions.join(", ");
    });
  }

