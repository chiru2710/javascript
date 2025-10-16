const baseURL = "http://localhost:3000/students"; // JSON-server URL

// -------------------- CREATE (POST) --------------------
function addStudent(id, name, age, address) {
  fetch(baseURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, age, address })
  })
    .then(res => res.json())
    .then(data => console.log("Student added:", data))
    .catch(err => console.error("Error:", err));
}

// -------------------- READ (GET) --------------------
function getStudents() {
  fetch(baseURL)
    .then(res => res.json())
    .then(data => console.log("All Students:", data))
    .catch(err => console.error("Error:", err));
}

// -------------------- UPDATE (PUT) --------------------
function updateStudent(id, updatedData) {
  fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData)
  })
    .then(res => res.json())
    .then(data => console.log("Student updated:", data))
    .catch(err => console.error("Error:", err));
}

// -------------------- DELETE (DELETE) --------------------
function deleteStudent(id) {
  fetch(`${baseURL}/${id}`, { method: "DELETE" })
    .then(() => console.log(`Student with ID ${id} deleted`))
    .catch(err => console.error("Error:", err));
}

// -------------------- INTERACTIVE MENU --------------------
function startCRUD() {
  const action = prompt(
    "Choose an action:\n1. Add Student\n2. View Students\n3. Update Student\n4. Delete Student"
  );

  switch (action) {
    case "1":
      const id = Number(prompt("Enter student ID:"));
      const name = prompt("Enter name:");
      const age = Number(prompt("Enter age:"));
      const address = prompt("Enter address:");
      addStudent(id, name, age, address);
      break;

    case "2":
      getStudents();
      break;

    case "3":
      const updateId = Number(prompt("Enter student ID to update:"));
      const updateName = prompt("Enter new name (leave blank to skip):");
      const updateAgeStr = prompt("Enter new age (leave blank to skip):");
      const updateAddress = prompt("Enter new address (leave blank to skip):");

      // Only include fields that were entered
      const updatedData = {};
      if (updateName) updatedData.name = updateName;
      if (updateAgeStr) updatedData.age = Number(updateAgeStr);
      if (updateAddress) updatedData.address = updateAddress;

      updateStudent(updateId, updatedData);
      break;

    case "4":
      const deleteId = Number(prompt("Enter student ID to delete:"));
      deleteStudent(deleteId);
      break;

    default:
      console.log("Invalid choice!");
  }
}

// Start the interactive CRUD menu
startCRUD();
