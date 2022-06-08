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
    const query = "SELECT * FROM food f JOIN recipe r ON r.id = f.recipe_id WHERE f.id = ?";
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

function success_response(result) {
    {
        var data = {
            id: result.id,
            name: result.name,
            alt_name: result.alt_name,
            image: result.image,
            description: result.description,
            origin: result.origin,
            ingredients: get_recipe_ingredients(result.id)
        };
    }
}

function get_recipe_ingredients(food){
    food = "SELECT ri.ingredient_id AS id, i.name, ri.amount FROM recipe_ingredient ri JOIN ingredient i ON ri.ingredient_id = i.id JOIN recipe r ON ri.recipe_id = r.id WHERE ri.recipe_id = r.id"
}

// const query = await db.query(
//     sql`
//       SELECT
//         f.id,
//         f.name,
//         f.alt_name,
//         f.image,
//         f.description,
//         f.origin,
//         ${nestQuerySingle(
//           sql`
//             SELECT r.steps
//             FROM recipe r WHERE r.id = f.recipe_id
//           `
//         )} AS manager,
//         ${nestQuery(
//           sql`
//             SELECT ri.ingredient_id AS id, i.name, ri.amount 
//             FROM recipe_ingredient ri
//             JOIN ingredient i USING (id)
//             WHERE ri.recipe_id = r.id
//           `
//         )} AS ingredients
//       FROM food f
//       WHERE f.id = ?
//     `,
//   );

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.INSTANCE_CONNECTION_NAME,
    port: process.env.DB_PORT
});


// const test = "SELECT * FROM food f JOIN recipe r ON f.recipe_id = r.id JOIN recipe_ingredient ri ON ri.recipe_id = r.id JOIN ingredient i ON i.id = ri.ingredient_id WHERE f.id = ?" 

// SELECT ri.ingredient_id AS id, i.name, ri.amount FROM recipe_ingredient ri JOIN ingredient i ON ri.ingredient_id = i.id JOIN recipe r ON ri.recipe_id = r.id WHERE ri.recipe_id = 