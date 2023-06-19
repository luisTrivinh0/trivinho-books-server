const { getAllBooks, getBookById, insertBook, patchBook, deleteBookById } = require("../services/books")

function getBooks(req, res){
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getBookById(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res){
    try {
        const newBook = req.body
        if(req.body.name && req.body.autor) {
            insertBook(newBook)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("Faltam campos obrigatórios!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function updateBook(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const patch = req.body
            const book = patchBook(patch, id)
            res.status(200)
            res.send('Livro atualizado com sucesso!')
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id;
        deleteBookById(id);
        res.status(200).send('Livro excluído com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    updateBook,
    deleteBook
}