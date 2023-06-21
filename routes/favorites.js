const { Router } = require("express")
const { getFavorites, getFavorite, postFavorite, updateFavorite, deleteFavorite } = require("../controllers/favorites")

const router = Router()

router.get('/', getFavorites)
router.get('/:id', getFavorite)

router.post('/:id', postFavorite)

router.delete("/:id", deleteFavorite)

module.exports = router