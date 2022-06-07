const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv").config();
const app = express();


app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, ()=> {
    console.log(`API listening on port ${port}`);
});

app.get("/", async (req, res) =>{
    res.json({status: "Yummy, food is ready"});
});

app.get("/:id", async (req, res) => {
    const query = "SELECT * FROM food food JOIN recipe r ON food.recipe_id = r.id JOIN recipe_ingredient ri ON ri.recipe_id = r.id JOIN ingredient i ON i.id = ri.ingredient_id WHERE food.id = ?"
    // const query = "SELECT * FROM food WHERE id = ?";
    pool.query(query, [ req.params.id ] , (error, results) => {
        // console.log(error);
        // console.log(process.env.DB_NAME);
        if(error){
            res.json({status: error});
        } else {
            res.json(results[0]);
        }
    });
});

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.INSTANCE_CONNECTION_NAME,
    port: process.env.DB_PORT
});


// const test = "SELECT * FROM food f JOIN recipe r ON f.recipe_id = r.id JOIN recipe_ingredient ri ON ri.recipe_id = r.id JOIN ingredient i ON i.id = ri.ingredient_id WHERE f.id = ?" 