//require db 
// import db from ("../models")
const db = require("../models")

module.exports = {
    findAllSaved: (req, res) => {
        db.savedBooks
        .find()
        .then(function(result){
            res.json(result)
        })
        .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.savedBooks
        .create({
            title: req.body.title,
            link: req.body.link,
            author: req.body.author,
            desription: req.body.description,
            key: req.body.key
        })
        .then(res.end())
    },
    remove: (req, res) => {
        db.savedBooks
        .findById({ key: req.params.key })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}