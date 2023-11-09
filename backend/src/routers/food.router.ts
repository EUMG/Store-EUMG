import {Router} from 'express';
import { sample_foods, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { client } from '../configs/database.config';

const router = Router();

router.get("/",asyncHandler(
    async(req,res)=>{
        const foods = await client.query('SELECT * FROM foods');
        res.send(foods.rows);
    }
))

router.get("/search/:searchTerm",asyncHandler(
    async (req,res)=>{
        const searchRegex = new RegExp(req.params.searchTerm,'i');

        // const foods = await client.query(`SELECT * FROM foods WHERE name ILIKE '%c%'`);
        // console.log('foods:', foods.rows); // Log the results
        res.send(console.log(`searchRegex ${searchRegex} searchTerm ${req.params.searchTerm}`));
    }
))

router.get("/tags",(req,res)=>{
    res.send(sample_tags);
})

router.get("/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods = sample_foods;

    if (tagName === "All") {
      res.send(foods);
    } else {
      const filteredFoods = foods.filter((food) => food.tags?.includes(tagName));
      res.send(filteredFoods);
    }
})

router.get("/:foodId",(req,res) =>{
    const foodId = req.params.foodId;
    const food = sample_foods
    .find(food => food.id == foodId);
    res.send(food);
})

export default router;