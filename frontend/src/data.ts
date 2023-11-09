import { Tag } from './app/shared/models/Tag'
import {Food} from './app/shared/models/food'

export const sample_foods: Food[] =[
    {
        id:'1',
        name:'chiken soup',
        price:11,
        cooktime: '40-50',
        favorite:true,
        origins:['india','asia'],
        stars:3,
        imageurl:'assets/food1.jpg',
        tags: ['SlowFood','Soup']
    },
    {
        id:'2',
        name:'rice',
        price:11,
        cooktime: '30-40',
        favorite:false,
        origins:['india','asia'],
        stars:5,
        imageurl:'assets/food2.jpg',
        tags: ['SlowFood','Pizza']
    }
]

export const sample_tags:Tag[] = [
    {name:'All',count:2},
    {name:'Soup',count:1},
    {name:'Pizza',count:1}
]