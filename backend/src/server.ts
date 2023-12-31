import expres from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';

const app = expres();
app.use(expres.json());
//localhost:4200
//localhost:5000
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter);

const port = 5000;
app.listen(port,()=>{
    console.log("Website served on http://localhost:"+port);
})

