import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_URL, FOOD_TAGS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) {

   }

  getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
    //this.getAll()
    //.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getFoodbyId(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
    //this.getAll().find(food => food.id == foodId) ?? new Food();
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOOD_TAGS_URL);
    //sample_tags;
  }
  getAllFoodsByTag(tag:string):Observable<Food[]>{
    return tag == "ALL"?
    this.getAll() :
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag)
    //this.getAll().filter(food=>food.tags?.includes(tag));
  }
}
