const express = require("express")
const userRouter = require('./user')
const app = express()

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