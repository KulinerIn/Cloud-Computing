const { response } = require('express')
const express = require ('express')
const app = express()

//Database
const Food = [

    {
        ID: "1", 
        Name: "Klepon",
        DaerahAsal:"Jawa",
        Image:"",
        Recipie: [
            { "name": "Tepung Ketan", "qty": "250g" },
            { "name": "Tepung Beras", "qty": "50g" },
            { "name": "Air", "qty": "" },
            { "name": "Gula Merah", "qty": "" },
            { "name": "Parutan Kelapa", "qty": "" },
        ],
        Calorie: "100 - 120 Kalori"
        },
    
    {
        ID: "2",
        Name: "Kue Lapis Sagu",
        DaerahAsal: "Betawi",
        Image:"",
        Recipie: [
            { "name": "Tepung Sagu", "qty": "300g" },
            { "name": "Tepung Terigu", "qty": "150g" },
            { "name": "Gula Pasir", "qty": "350g" },
            { "name": "Santan Kental", "qty": "1000ml" },
            { "name": "Garam", "qty": "1sdm" },
            { "name": "pewarna Makanan", "qty": "secukupnya" }
        ],
        Calorie: "?"
    },
    
    {
        ID: "3",
        Name: "Kue Putri Salju",
        DaerahAsal: "",
        Image:"",
        Recipie: [
            { "name": "Telor", "qty": "2 Butir" },
            { "name": "Butter", "qty": "200g" },
            { "name": "Margarin", "qty": "300g" },
            { "name": "Gula Halus", "qty": "100g" },
            { "name": "Keju Edam parut", "qty": "50gr" },
            { "name": "Keju Cheddar Parut", "qty": "50gr" },
            { "name": "Tepung Terigu", "qty": "650gr"},
            { "name": "Susu Bubuk", "qty": "60gr"},
            { "name": "Maizena", "qty": "65gr"}
        ],
        Calorie: "?"
    },
    
    {
        ID: "4",
        Name: "Lapis Legit",
        DaerahAsal:"",
        Image:"",
        Recipie: [
            { "name": "Kuning Telor", "qty": "20 butir"},
            { "name": "Gula Halus", "qty": "300gr" },
            { "name": "Butter", "qty": "350g" },
            { "name": "Tepung Terigu", "qty": "60gr"},
            { "name": "Susu Bubuk", "qty": "20gr"},
            { "name": "Bumbu Spekuk", "qty": "1sdt"},
            { "name": "Susu Kental Manis", "qty": "3sdm"}
        ],
        Calorie: "?"
    },
    
    {
        ID: "5",
        Name: "Martabak Telor",
        DaerahAsal:"",
        Image:"",
        Recipie: [
            { "name": "Kuning Telor", "qty": "20 butir"},
            { "name": "Gula Halus", "qty": "300gr" },
            { "name": "Butter", "qty": "350g" },
            { "name": "Tepung Terigu", "qty": "60gr"},
            { "name": "Susu Bubuk", "qty": "20gr"},
            { "name": "Bumbu Spekuk", "qty": "1sdt"},
            { "name": "Susu Kental Manis", "qty": "3sdm"}
        ],
        Calorie: "?"
    },

    {
        ID: "6",
        Name: "Martabak Manis",
        DaerahAsal:"",
        Image:"",
        Recipie: [
            { "name": "Kuning Telor", "qty": "20 butir"},
            { "name": "Gula Halus", "qty": "300gr" },
            { "name": "Butter", "qty": "350g" },
            { "name": "Tepung Terigu", "qty": "60gr"},
            { "name": "Susu Bubuk", "qty": "20gr"},
            { "name": "Bumbu Spekuk", "qty": "1sdt"},
            { "name": "Susu Kental Manis", "qty": "3sdm"}
        ],
        Calorie: "?"
    },

    {
        ID: "7",
        Name: "Nastar",
        DaerahAsal:"",
        Image:"",
        Recipie: [
            { "name": "Kuning Telor", "qty": "20 butir"},
            { "name": "Gula Halus", "qty": "300gr" },
            { "name": "Butter", "qty": "350g" },
            { "name": "Tepung Terigu", "qty": "60gr"},
            { "name": "Susu Bubuk", "qty": "20gr"},
            { "name": "Bumbu Spekuk", "qty": "1sdt"},
            { "name": "Susu Kental Manis", "qty": "3sdm"}
        ],
        Calorie: "?"
    },

    {
        ID: "8",
        Name: "Onde-Onde",
        DaerahAsal:"",
        Image:"",
        Recipie: [
            { "name": "Kuning Telor", "qty": "20 butir"},
            { "name": "Gula Halus", "qty": "300gr" },
            { "name": "Butter", "qty": "350g" },
            { "name": "Tepung Terigu", "qty": "60gr"},
            { "name": "Susu Bubuk", "qty": "20gr"},
            { "name": "Bumbu Spekuk", "qty": "1sdt"},
            { "name": "Susu Kental Manis", "qty": "3sdm"}
        ],
        Calorie: "?"
    },

        {
            ID: "9",
            Name: "Pukis",
            DaerahAsal:"",
            Image:"",
            Recipie: [
                { "name": "Kuning Telor", "qty": "20 butir"},
                { "name": "Gula Halus", "qty": "300gr" },
                { "name": "Butter", "qty": "350g" },
                { "name": "Tepung Terigu", "qty": "60gr"},
                { "name": "Susu Bubuk", "qty": "20gr"},
                { "name": "Bumbu Spekuk", "qty": "1sdt"},
                { "name": "Susu Kental Manis", "qty": "3sdm"}
            ],
            Calorie: "?" 
        },

        {
            ID: "10",
            Name: "Serabi",
            DaerahAsal:"",
            Image:"",
            Recipie: [
                { "name": "Kuning Telor", "qty": "20 butir"},
                { "name": "Gula Halus", "qty": "300gr" },
                { "name": "Butter", "qty": "350g" },
                { "name": "Tepung Terigu", "qty": "60gr"},
                { "name": "Susu Bubuk", "qty": "20gr"},
                { "name": "Bumbu Spekuk", "qty": "1sdt"},
                { "name": "Susu Kental Manis", "qty": "3sdm"}
            ],
            Calorie: "?"
        }
    
]

app.get('/',(request, response) => {
    response.json(Food[1])
})

const port = process.env.port || 8000;
app.listen(port, _=> {
    console.log(`App is listening at ${port}`)
})
