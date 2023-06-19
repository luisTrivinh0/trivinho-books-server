const express = require("express")
const bookRoute = require('./routes/book.js')

const app = express()
app.use(express.json())
app.use('/books', bookRoute)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})