const fs = require("fs")

function getAllFavorites(){
    return JSON.parse(fs.readFileSync("favorites.json"))
}

function getFavoriteById(id){
    const favorites = JSON.parse(fs.readFileSync("favorites.json"))
    const filteredFavorite = favorites.filter( favorite => favorite.id === id)[0]
    return filteredFavorite
}

function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const favorites = JSON.parse(fs.readFileSync("favorites.json"));

    const newFavorite = books.find( book => book.id === id)
    const newFavoriteList = [...favorites, newFavorite]
    fs.writeFileSync("favorites.json", JSON.stringify(newFavoriteList))
}

function deleteFavoriteById(id) {
    let favorites = JSON.parse(fs.readFileSync("favorites.json"))
    const index = favorites.findIndex(favorite => favorite.id === id);
    if (index !== -1) {
        favorites.splice(index, 1);
        fs.writeFileSync("favorites.json", JSON.stringify(favorites))
    } else {
        throw new Error("Livro não encontrado.");
    }
}


module.exports = {
    getAllFavorites,
    getFavoriteById,
    insertFavorite,
    deleteFavoriteById
}