const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")

const app = express()
app.use(express.json())
app.use(cors())

// const userRoute = require("./routes/userRoute")

// app.use("/api/user/", userRoute)

mongoose.connect("mongodb://127.0.0.1:27017/blog")

app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await UserModel.create({
            email: req.body.email,
            password: hashedPassword,
            // other user data...
        });
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json(user)
            } else {
                res.json("Password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

// comment
app.post("/blogs/:id/comments", (req, res) => {
    console.log(req.params.id)
    console.log(req.body.comment)
})

app.listen(3001, () => {
    console.log("Server is running")
})