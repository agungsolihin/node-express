const express = require('express')
const router = express.Router()

let users = [
    {id: 1, name: 'Muhammad Agung Solihin', email: 'mohagungsolihin@gmail.com'},
    {id: 2, name: 'Ria Aprilianty', email: 'riaaprilianty@gmail.com'},
]

router.route("/users") 
    .get(function(request, response) {
        response.json(users)
    })
    .post(function(request, response) {
        users.push(request.body)
        response.send(users)
    })

router.put("/users/:id", function(request, response) {
    const id = request.params.id
    users.filter(user => {
        if(user.id == id) {
            user.id = id
            user.name = request.body.name
            user.email = request.body.email

            return user
        }
    })
    response.json(users)
})

router.delete("/users/:userId", function(request, response) {
    response.send(request.params.userId)
})

module.exports = router;