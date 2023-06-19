const fs = require("fs")

function getAllBooks(){
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id){
    const books = JSON.parse(fs.readFileSync("books.json"))
    const filteredBook = books.filter( book => book.id === id)[0]
    return filteredBook
}

function getNextAvailableId(books) {
    const existingIds = books.map(book => parseInt(book.id));
    const maxId = Math.max(...existingIds);
    return (maxId !== Infinity && !isNaN(maxId)) ? maxId + 1 : 1;
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"));

    const nextId = getNextAvailableId(books);

    const book = {
        id: nextId.toString(),
        name: newBook.name,
        autor: newBook.autor
    };

    books.push(book);
    fs.writeFileSync("books.json", JSON.stringify(books));

    return book;
}


function patchBook(patches, id){
    let books = JSON.parse(fs.readFileSync("books.json"))

    const indexPatch = books.findIndex( book => book.id === id)

    const contentPatch = { ...books[indexPatch], ...patches}

    books[indexPatch] = contentPatch

    fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBookById(id) {
    let books = JSON.parse(fs.readFileSync("books.json"))
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        fs.writeFileSync("books.json", JSON.stringify(books))
    } else {
        throw new Error("Livro não encontrado.");
    }
}


module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    patchBook,
    deleteBookById
}