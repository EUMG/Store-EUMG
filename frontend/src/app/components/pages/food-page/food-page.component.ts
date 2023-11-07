import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Food;
  constructor(activatedRoute:ActivatedRoute,foodService:FoodService,
    private cartService: CartService, private router:Router){

    activatedRoute.params.subscribe((params) =>{
      if(params.id){
        foodService.getFoodbyId(params.id).subscribe((ServeFood)=>{
          this.food = ServeFood;
        });
      }
    })
  }

  generateStarsArray(stars: number): number[] {
    const totalStars = 5;
    const filledStars = Math.min(stars, totalStars);
    const emptyStars = totalStars - filledStars;
    return [...Array(filledStars).fill(1), ...Array(emptyStars).fill(0)];
  }

  addToCart(){
    this.cartService.addToCart(this.food); //add the actual food
    this.router.navigateByUrl('/cart-page'); //going to home
  }
}
