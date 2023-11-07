export const sample_foods: any[] =[
    {
        id:'1',
        name:'chiken soup',
        price:11,
        cookTime: '40-50',
        favorite:true,
        origins:['india','asia'],
        stars:3,
        imageUrl:'assets/food1.jpg',
        tags: ['SlowFood','Soup']
    },
    {
        id:'2',
        name:'rice',
        price:11,
        cookTime: '30-40',
        favorite:false,
        origins:['india','asia'],
        stars:5,
        imageUrl:'assets/food2.jpg',
        tags: ['SlowFood','Pizza']
    }
]

export const sample_tags:any[] = [
    {name:'All',count:2},
    {name:'Soup',count:1},
    {name:'Pizza',count:1}
]

export const sample_users:any[] =[
    {
        name:"John Doe",
        email:"john@gmail.com",
        password:"4321",
        address:"Toronto On",
        isAdmin:true
    },
    {
        name:"Camaro",
        email:"camarin@gmail.com",
        password:"1234",
        address:"Culiacan Sin",
        isAdmin:true
    }
]