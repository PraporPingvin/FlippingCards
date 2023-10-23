const Card = require('../models/Card')
const cyrillicToTranslit = require("cyrillic-to-translit-js");
const Set = require("../models/Set");
const {Types} = require("mongoose");
class CardController{

    async createCard(req, res) {
        try {
            const {frontSide, backSide, setId} = req.body;
            const card = new Card({frontSide, backSide, setId});
            await card.save();
            return res.json({message: "Set was created", data: card});
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"});
        }
    }
    async getCards(req, res) {
        try {
            const cards = await Card.find({setId: req.query.id})
            return res.json(cards)
        } catch (e) {
            return res.status(500).json({message: "Server error"})
        }
    }
}
module.exports = new CardController()