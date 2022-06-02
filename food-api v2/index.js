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

app.get("/:name", async (req, res) => {
    const query = "SELECT * FROM food WHERE name = ?";
    pool.query(query, [ req.params.name ] , (error, results) => {
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
    Host: process.env.DB_HOST,
});