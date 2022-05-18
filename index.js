const express = require('express')

const app = express

const port = 3000


// Test DB 
const recipies = (request, response) => {
    const Food = [

        {
            ID: "Kl01", 
            Name: "Klepon",
            Recipie: [{
                ingred1: "250gr Tepung Ketan",
                ingred2: "50gr Tepung Beras",
                ingred3: "Air",
                ingred4: "Gula Merah",
                ingred5: "Parutan Kelapa"
            }],
            Calorie: "100 - 120 Kalori"
        },
    
        {
            ID: "Kl02",
            Name: "Kue Lapis Sagu",
            Recipie: [{
                ingred1: "300gr tepung sagu",
                ingred2: "150gr terigu",
                ingred3: "350gr Gula pasir",
                ingred4: "1000ml santan kental",
                ingred5: "Perasa secukupnya",
                ingred6: "1sdm garam",
                ingred7: "Pewarna makanan"
            }],
            Calorie: "?"
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
}


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