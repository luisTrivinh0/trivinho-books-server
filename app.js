const express = require("express")
const cors = require("cors")
const bookRoute = require('./routes/book.js')
const favoriteRoute = require('./routes/favorites.js')

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/books', bookRoute)
app.use('/favorites', favoriteRoute)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})