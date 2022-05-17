const express = require('express')

const app = express

const port = 3000


// Test DB 

const Food = [

    {
        "id": "Kl01", 
        "name": "Chifon"
    },

    {
        "id": "Kl02",
        "name": "Putu"
    },

    {
        "id": "Kl03",
        "name": "Dodol"
    },

    {
        "id": "Kl04",
        "name": "Martabak"
    },

    {
        "id": "Kl05",
        "name": "Klepon"
    }

]

app.use(express.json())

app.get('/', (request, response) => {
    response,json(Food)
})

app.post('/', (request, response) => {
    const Food = request.body
    if(!Food) response.status(403)
    .send({error: "You're post is wrong"}) 
    Foods.push(Food)
    response.send(Food)   
})

app.listen(port, () =>{
    console.log(`App is listening at http://localhost:${port}}`)
})