const express = require('express')

const app = express

const port = 3000


// Test DB 
const recipies = (request, response) => {
    const Food = [

        {
            ID: "Kl01", 
            Name: "Klepon",
            DaerahAsal:"Jawa",
            Image:"",
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
            DaerahAsal: "Betawi",
            Image:"",
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
            ID: "Kl03",
            Name: "Kue Putri Salju",
            DaerahAsal: "",
            Image:"",
            Recipie: [{
                ingred1: "2 butir telor",
                ingred2: "200gr Butter",
                ingred3: "300gr Margarin",
                ingred4: "100gr gula halus",
                ingred5: "50gr Keju Edam Parut",
                ingred6: "50gr Keju Cheddar Parut",
                ingred7: "650gr tepung terigu",
                ingred8: "60gr susu bubuk",
                ingred9: "65gr Maizena"
            }],
            Calorie: "?"
        },
    
        {
            ID: "Kl04",
            Name: "Lapis Legit",
            DaerahAsal:"",
            Image:"",
            Recipie: [{
                ingred1: "20 butir Kuning Telor",
                ingred2: "300gr Gula Halus",
                ingred3: "350gr Butter",
                ingred4: "60gr Tepung terigu",
                ingred5: "20gr Susu Bubuk",
                ingred6: "1sdt Bumbu Spekuk",
                ingred7: "3sdm Susu Kental Manis"
            }],
            Calorie: "?"
        },
    
        {
            ID: "Kl05",
            Name: "Martabak Telor",
            DaerahAsal:"",
            Image:"",
            Recipie: [{
                ingred1: "20 butir Kuning Telor",
                ingred2: "300gr Gula Halus",
                ingred3: "350gr Butter",
                ingred4: "60gr Tepung terigu",
                ingred5: "20gr Susu Bubuk",
                ingred6: "1sdt Bumbu Spekuk",
                ingred7: "3sdm Susu Kental Manis"
            }],
            Calorie: "?"
        },

        {
            ID: "Kl06",
            Name: "Martabak Manis",
            DaerahAsal:"",
            Image:"",
            Recipie: [{
                ingred1: "20 butir Kuning Telor",
                ingred2: "300gr Gula Halus",
                ingred3: "350gr Butter",
                ingred4: "60gr Tepung terigu",
                ingred5: "20gr Susu Bubuk",
                ingred6: "1sdt Bumbu Spekuk",
                ingred7: "3sdm Susu Kental Manis"
            }],
            Calorie: "?"
        },

        {
            ID: "Kl07",
            Name: "Nastar",
            DaerahAsal:"",
            Image:"",
            Recipie: [{
                ingred1: "20 butir Kuning Telor",
                ingred2: "300gr Gula Halus",
                ingred3: "350gr Butter",
                ingred4: "60gr Tepung terigu",
                ingred5: "20gr Susu Bubuk",
                ingred6: "1sdt Bumbu Spekuk",
                ingred7: "3sdm Susu Kental Manis"
            }],
            Calorie: "?"
        },

        {
            ID: "Kl08",
            Name: "Onde-Onde",
            DaerahAsal:"",
            Image:"",
            Recipie: [{
                ingred1: "20 butir Kuning Telor",
                ingred2: "300gr Gula Halus",
                ingred3: "350gr Butter",
                ingred4: "60gr Tepung terigu",
                ingred5: "20gr Susu Bubuk",
                ingred6: "1sdt Bumbu Spekuk",
                ingred7: "3sdm Susu Kental Manis"
            }],
            Calorie: "?"
        },

        {
            ID: "Kl09",
            Name: "Pukis",
            DaerahAsal:"",
            Image:"",
            Recipie: [{
                ingred1: "20 butir Kuning Telor",
                ingred2: "300gr Gula Halus",
                ingred3: "350gr Butter",
                ingred4: "60gr Tepung terigu",
                ingred5: "20gr Susu Bubuk",
                ingred6: "1sdt Bumbu Spekuk",
                ingred7: "3sdm Susu Kental Manis"
            }],
            Calorie: "?" 
        },

        {
            ID: "Kl10",
            Name: "Serabi",
            DaerahAsal:"",
            Image:"",
            Recipie: [{
                ingred1: "20 butir Kuning Telor",
                ingred2: "300gr Gula Halus",
                ingred3: "350gr Butter",
                ingred4: "60gr Tepung terigu",
                ingred5: "20gr Susu Bubuk",
                ingred6: "1sdt Bumbu Spekuk",
                ingred7: "3sdm Susu Kental Manis"
            }],
            Calorie: "?"
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