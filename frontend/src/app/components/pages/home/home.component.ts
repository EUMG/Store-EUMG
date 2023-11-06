import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = [];
  constructor( private foodService:FoodService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }else if(params.tag){
        this.foods=this.foodService.getAllFoodsByTag(params.tag); //anytime we have a tag parameter filter the food based in that tag
      } else{
        this.foods = foodService.getAll();
      }
    }) //means anytime when the params changed called the function inside
    // the subscribe
    this.foods = foodService.getAll();
  }
  generateStarsArray(stars: number): number[] {
    const totalStars = 5;
    const filledStars = Math.min(stars, totalStars);
    const emptyStars = totalStars - filledStars;
    return [...Array(filledStars).fill(1), ...Array(emptyStars).fill(0)];
  }



}
