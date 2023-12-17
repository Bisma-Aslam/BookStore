function addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    const title = titleInput.value;
    const author = authorInput.value;

    if (!title || !author) {
        console.log("Fields are empty");
        return;
    }

    const booksContainer = document.getElementById('books');
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book-entry');

    const bookElement = document.createElement('p');
    bookElement.textContent = `"${title}" by ${author}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        booksContainer.removeChild(bookEntry);
    });

    bookEntry.appendChild(bookElement);
    bookEntry.appendChild(removeButton);

    booksContainer.appendChild(bookEntry);

    
    titleInput.value = '';
    authorInput.value = '';
}
