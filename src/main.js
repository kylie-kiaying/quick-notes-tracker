let myNotes = [];
const noteInput = document.getElementById('note-input');
const addBtn = document.getElementById('add-btn');
const noteList = document.getElementById('note-list');

function render(notes) {
  let listItems = '';
  for (let i = 0; i < notes.length; i++) {
    listItems += `
      <li class="flex items-center justify-between p-2 border-b border-gray-300">
        <span class="mr-2">${notes[i]}</span>
        <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded" data-index=${i}>Delete</button>
      </li>`;
  }
  noteList.innerHTML = listItems;
  setupDeleteBtnListeners();
}

function setupDeleteBtnListeners() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      myNotes.splice(index, 1);
      render(myNotes);
    });
  });
}

function addNote() {
  if (noteInput.value !== '') {
    myNotes.push(noteInput.value);
    render(myNotes);
    noteInput.value = '';
  }
}

addBtn.addEventListener('click', addNote);

noteInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addNote();
  }
});
