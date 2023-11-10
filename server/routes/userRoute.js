const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.post("/register", async(req, res) => {
    const {name, email, password} = req.body
    const newUser = new User({name, email, password})

    try {
        newUser.save()
        res.send("User Registered Successfully")
    } catch (error) {
        return res.status(400).json({message: error})
    }
})

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

module.exports = router
