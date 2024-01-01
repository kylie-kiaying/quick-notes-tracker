let myNotes = [];
const noteInput = document.getElementById("note-input");
const addBtn = document.getElementById("add-btn");
const noteList = document.getElementById("note-list");

function render(notes) {
  let listItems = "";
  for (let i = 0; i < notes.length; i++) {
    const formattedNote = notes[i].replace(/\n/g, "<br>");

      listItems += `
        <li class="flex items-start justify-between p-2 border rounded-md m-2 border-gray-300">
          <div class="flex flex-col">
            <span class="mb-auto mr-2">${formattedNote}</span>
          </div>
          <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded self-end" data-index=${i}>Delete</button>
        </li>`;

  }
  noteList.innerHTML = listItems;
  setupDeleteBtnListeners();
}

function setupDeleteBtnListeners() {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      myNotes.splice(index, 1);
      render(myNotes);
    });
  });
}

function addNote() {
  const trimmedValue = noteInput.value.trim();

  if (trimmedValue !== "") {
    myNotes.push(trimmedValue);
    render(myNotes);
    noteInput.value = "";
    noteInput.scrollTop = 0;
    noteInput.focus();

    noteInput.selectionStart = 0;
    noteInput.selectionEnd = 0;
  }
}

addBtn.addEventListener("click", addNote);

noteInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.shiftKey) {
    event.preventDefault();
    noteInput.value += "\n";
    noteInput.scrollTop = noteInput.scrollHeight;
  } else if (event.key === "Enter") {
    addNote();
  }
});
