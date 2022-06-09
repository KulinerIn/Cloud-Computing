const { query } = require("express");
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
    res.json({status: "API is Running and functioning"});
});

app.get("/:id", async (req, res) => {
    const query = "SELECT * FROM food food JOIN recipe recipe ON recipe.id = food.recipe_id WHERE food.id = ?";
    pool.query(query, [ req.params.id ], (error, results) => {
        if(error){
            res.json({status: error});
        } else {
            const ingredient_data = "SELECT ri.ingredient_id AS id, i.name, ri.amount FROM recipe_ingredient ri JOIN ingredient i ON ri.ingredient_id = i.id JOIN recipe r ON ri.recipe_id = r.id WHERE ri.recipe_id = ?"
            pool.query(ingredient_data, [results[0].recipe_id], (error, ingredient) => {
                if (error){
                    res.json({status: error});
                }else{
                    res.json({
                        data: {
                            id: results[0].id,
                            name: results[0].name,
                            alt_name: results[0].alt_name,
                            image: results[0].image,
                            description: results[0].description,
                            origin: results[0].origin,
                            ingredient: ingredient,
                            recipe: results[0].steps
                        }
                    });
                }
            
            })  
        }
    });
});

// function get_recipe(recipe_id) {
//     const query = "SELECT * FROM recipe WHERE recipe.id = ?";
//     var response;
//     pool.query(query, [ recipe_id ], (error, results) => {
//         if(error){
//             response = {
//                 error: error
//             }
//         } else {
//             const result = results[0]
//             ingredient_list = get_recipe_ingredients(result.id)

//             if (error in ingredient_list) {
//                 response = {
//                     error: ingredient_list.error
//                 }
//                 return
//             } else {

//             var recipe = {
//                 steps: result.steps,
//                 ingredients: ingredient_list
//             }

//             response = recipe
//         } return
//         }
//     });
//     return response
// }

// function get_recipe_ingredients(recipe_id){
//     const query = "SELECT * FROM recipe_ingredients WHERE recipe_ingredients.recipe_id = ?";   
//     var response;
//     pool.query(query, [recipe_id], (error, results) => {
//         if(error){
//             response = {
//                 error: error
//             }
//         } else {

//             var ingredients = [];
//             results.forEach(function (ingredient) {
//                 query = "SELECT * FROM ingredient WHERE ingredient.id = ?";
//                 pool.query(query, [ingredient.ingredient_id], (error, results) => {
//                     if (error){
//                         response = {
//                             error: error
//                         }
//                     } else {
//                         var data = {
//                             amount: ingredient.amount,
//                             ingredient: {
//                                 id: results[0].id,
//                                 name: results[0].name
//                             }
//                         }
//                         ingredients.push(data)
//                     }
//                 })

//             })
            
//             response = ingredients
//         }
//     });
//     return response
// }

// const result = results[0]

// recipe_data = get_recipe(result.recipe_id) 

// if (error in recipe_data) {
//     $.each(res.json({
//         data: null,
//         error: recipe_data.error
//     }))
//     return
// }

// var success_response = {
//         id: result.id,
//         name: result.name,
//         alt_name: result.alt_name,
//         image: result.image,
//         description: result.description,
//         origin: result.origin,
//         recipe: recipe_data,
//     };

// res.json(success_response);

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.INSTANCE_CONNECTION_NAME,
    port: process.env.DB_PORT
});