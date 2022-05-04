const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json( allJokes )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.getJokeByID = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneSingleJoke => {
            res.json( oneSingleJoke )
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
    .then(newlyCreatedJoke => {
        res.json( newlyCreatedJoke )
    })
    .catch(err => {
        res.json({message: 'Something went wrong', error: err })
    });}

    module.exports.updateExistingJoke = (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedJoke => {
                res.json({ updatedJoke })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}
    
    module.exports.deleteAnExistingJoke = (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}

// you could also do something like the following and replace all of the 'module.exports.' above with 'const ':

// module.exports = {
    // getAllJokes,
    // getJokeByID,
    // createNewJoke,
    // updateJoke,
    // deleteJoke
// }