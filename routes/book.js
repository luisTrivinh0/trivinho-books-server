const { Router } = require("express")
const { getBooks, getBook, postBook, updateBook, deleteBook } = require("../controllers/books")

const router = Router()

router.get('/', getBooks)
router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/:id', updateBook)

router.delete("/:id", deleteBook)

module.exports = router