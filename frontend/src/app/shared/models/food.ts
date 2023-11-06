export class Food{
    id!:string; //requirede member !
    name!:string;
    price!:number;
    tags?:string[]; //optional member ?
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}