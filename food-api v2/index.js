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
    res.json({status: "Yummy, food is ready"});
});

app.get("/:id", async (req, res) => {
    const query = "SELECT * FROM food WHERE id = ?";
    pool.query(query, [ req.params.id ], (error, results) => {
        if(error){
            res.json({status: error});
        } else {
            const result = results[0]

            recipe_data = get_recipe(result.recipe_id) 

            if (error in recipe_data) {
                res.json({
                    data: null,
                    error: recipe_data.error
                })
                return
            }

            var success_response = {
                    id: result.id,
                    name: result.name,
                    alt_name: result.alt_name,
                    image: result.image,
                    description: result.description,
                    origin: result.origin,
                    recipe: recipe_data,
                };

            res.json(success_response);
        }
    });
});

function get_recipe(recipe_id) {
    const query = "SELECT * FROM recipe WHERE recipe.id = ?";
    var response;
    pool.query(query, [ recipe_id ], (error, results) => {
        if(error){
            response = {
                error: error
            }
        } else {
            const result = results[0]
            ingredient_list = get_recipe_ingredients(result.id)

            if (error in ingredient_list) {
                response = {
                    error: ingredient_list.error
                }
                return
            } else {

            var recipe = {
                steps: result.steps,
                ingredients: ingredient_list
            }

            response = recipe
        } return
        }
    });
    return response
}

function get_recipe_ingredients(recipe_id){
    const query = "SELECT * FROM recipe_ingredients WHERE recipe_ingredients.recipe_id = ?";   
    var response;
    pool.query(query, [recipe_id], (error, results) => {
        if(error){
            response = {
                error: error
            }
        } else {

            var ingredients = [];
            results.forEach(function (ingredient) {
                query = "SELECT * FROM ingredient WHERE ingredient.id = ?";
                pool.query(query, [ingredient.ingredient_id], (error, results) => {
                    if (error){
                        response = {
                            error: error
                        }
                    } else {
                        var data = {
                            amount: ingredient.amount,
                            ingredient: {
                                id: results[0].id,
                                name: results[0].name
                            }
                        }
                        ingredients.push(data)
                    }
                })

            })
            
            response = ingredients
        }
    });
    return response
}

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.INSTANCE_CONNECTION_NAME,
    port: process.env.DB_PORT
});