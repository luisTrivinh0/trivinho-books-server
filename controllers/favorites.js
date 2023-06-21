const { getAllFavorites, getFavoriteById, insertFavorite, deleteFavoriteById } = require("../services/favorites")

function getFavorites(req, res){
    try {
        const favorites = getAllFavorites()
        res.send(favorites)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getFavorite(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getFavoriteById(id)
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

function postFavorite(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)) {
            insertFavorite(id)
            res.status(201)
            res.send("Novo Livro Favorito inserido com sucesso")
        } else {
            res.status(422)
            res.send("Faltam campos obrigatórios!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;
        deleteFavoriteById(id);
        res.status(200).send('Livro Favorito excluído com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getFavorites,
    getFavorite,
    postFavorite,
    deleteFavorite
}