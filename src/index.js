class TodoList {
  constructor() {
    this.notes = [];
  }

  addNote(noteText) {
    if (noteText.trim() !== '') {
      const note = {
        text: noteText,
        completed: false,
      };
      this.notes.push(note);
      return 'Нотатка додана.';
    } else {
      return 'Нотатка не може бути порожньою.';
    }
  }

  deleteNote(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
      return 'Нотатка видалена.';
    } else {
      return 'Нотатка не існує за вказаним індексом.';
    }
  }

  editNote(index, newText) {
    if (index >= 0 && index < this.notes.length) {
      if (newText.trim() !== '') {
        this.notes[index].text = newText;
        return 'Нотатку відредаговано.';
      } else {
        return 'Новий текст нотатки не може бути порожнім.';
      }
    } else {
      return 'Нотатка не існує за вказаним індексом.';
    }
  }

  getNoteInfo(index) {
    if (index >= 0 && index < this.notes.length) {
      const note = this.notes[index];
      return `Нотатка #${index + 1}:\nТекст: ${note.text}\nВиконано: ${note.completed ? 'Так' : 'Ні'}`;
    } else {
      return 'Нотатка не існує за вказаним індексом.';
    }
  }

  markAsCompleted(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].completed = true;
      return 'Нотатку позначено як виконану.';
    } else {
      return 'Нотатка не існує за вказаним індексом.';
    }
  }

  getNoteCount() {
    const totalNotes = this.notes.length;
    const uncompletedNotes = this.notes.filter((note) => !note.completed).length;
    return `Загальна кількість нотаток: ${totalNotes}, Невиконаних нотаток: ${uncompletedNotes}`;
  }

  getAllNotes() {
    return this.notes.map((note, index) => `${index + 1}. ${note.text}`);
  }
}

const myTodoList = new TodoList();
console.log(myTodoList.addNote('Приклад 1')); 
console.log(myTodoList.addNote('Приклад 2')); 
console.log(myTodoList.addNote(''));
console.log(myTodoList.deleteNote(1)); 
console.log(myTodoList.deleteNote(2));
console.log(myTodoList.editNote(1, 'Новий текст')); 
console.log(myTodoList.editNote(0, 'Новий текст')); 
console.log(myTodoList.getNoteInfo(0)); 
console.log(myTodoList.markAsCompleted(0)); 
console.log(myTodoList.getNoteCount()); 
console.log(myTodoList.getAllNotes()); 



