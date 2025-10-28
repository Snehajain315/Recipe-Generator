import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app= express();
app.use(cors());
app.use(bodyParser.json());

let FoodCategory = [
    { id: 1, Category: "South Indian" },
    { id: 2, Category: "North Indian" },
    { id: 3, Category: "Chinese" },
    { id: 4, Category: "Gujrati Dishes"},
    { id: 5, Category: "Punjabi Dishes"},
    { id: 6, Category: "Desserts" }
]

app.get("/Finder",(req,res)=>{
    res.json(FoodCategory);
});

let Dishes= [
    { id: 1, name:"Dosa", Category:"South Indian"},
    { id: 2, name: "Idli", Category: "South Indian"},
    { id: 3, name: "Vada", Category: "South Indian"},
    { id: 4, name: "Uttapam", Category: "South Indian"},
    { id: 5, name: "Sambar", Category: "South Indian"},
    { id: 6, name: "Chole Bhature", Category: "North Indian"},
    { id: 7, name: "Palak Paneer", Category: "North Indian"},
    { id: 8, name: "Rajma Chawal", Category: "North Indian"},
    { id: 9, name: "Aloo Paratha",Category: "North Indian"},
    { id: 10, name: "Veg Manchurian", Category: "Chinese"},
    { id: 11, name: "Fried Rice", Category: "Chinese"},
    { id: 12, name: "Spring Rolls", Category: "Chinese"},
    { id: 13, name: "Chow Mein", Category: "Chinese"},
    { id: 14, name: "Hakka Noodles", Category: "Chinese" },
    { id: 15, name: "Dhokla", Category: "Gujrati Dishes" },
    { id: 16, name: "Thepla", Category: "Gujrati Dishes" },
    { id: 17, name: "Khandvi", Category: "Gujrati Dishes" },
    { id: 18, name: "Undhiyu", Category: "Gujrati Dishes" },
    { id: 19, name: "Handvo", Category: "Gujrati Dishes"  },
    { id: 20, name: "Sarson Da Saag", Category: "Punjabi Dishes" },
    { id: 21, name: "Makki Di Roti", Category: "Punjabi Dishes" },
    { id: 22, name: "Chole Bhature", Category: "Punjabi Dishes" },
    { id: 23, name: "Paneer Butter Masala", Category: "Punjabi Dishes" },
    { id: 24, name: "Rajma Chawal", Category: "Punjabi Dishes"  },
    { id: 25, name: "Gulab Jamun", Category: "Desserts"},
    { id: 26, name: "Rasgulla", Category: "Desserts"},
    { id: 27, name: "Kheer", Category: "Desserts"},
    { id: 28, name: "Jalebi", Category: "Desserts"},
    { id: 29, name: "Rabri", Category: "Desserts" },
    {id: 30, name: "Hot Chocolate", Category: "Desserts"}
]

app.get("/api/category/dishes/:Category" , (req,res)=>{
    let {Category} = req.params;
    console.log(Category);
    let Res= Dishes.filter((e)=>e.Category===Category);
    res.json(Res);
})

let port= process.env.PORT || 5500;
app.listen(port, ()=>(
    console.log(`Server is running on Port ${port}`)
));

