const express = require("express")
const userRouter = require('./router/user')
const app = express()

app.use(express.json()) // for parsing application json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.get("/", function(request, response) {
    const kelas = {
        id: 1,
        nama: 'Javascript'
    }
    response.send(kelas)
})

app.get("/about", function(request, response) {
    response.redirect("https://expressjs.com")
})

app.use(userRouter)

app.listen(3000, function() {
    console.log("Server running on port 3000!");
})