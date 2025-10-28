import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

//----------------------Icons----------------------------------
import {HomeIcon, Utensils, ChefHat, Coffee,CookingPot } from 'lucide-react';


//--------------Pages-----------------------
import Home from "./Pages/Home";
import CustomDish from "./Pages/CustomDish";
import Recipe from "./RecipeFinder/Recipe";
import Dishes from "./RecipeFinder/Dishes";
import GetRecipe from "./RecipeFinder/GetRecipe";

export default function App()
{
  return(
    <div>

     <BrowserRouter>
     <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
      <CookingPot size={24} className="text-emerald-400" />
      <h3 className="text-2xl font-bold text-emerald-400 tracking-tight">yumFind</h3>
    </div>

          
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 flex items-center gap-2">
                 <HomeIcon size={18} /> 
                Home
              </Link>
              <Link to="/Recipe" className="text-gray-300 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 flex items-center gap-2">
                <Utensils size={18} />
                Recipe
              </Link>
              <Link to="/CustomDish" className="text-gray-300 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 flex items-center gap-2">
                <ChefHat size={18} />
                CustomDish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Recipe" element={<Recipe/>}/>
        <Route path="/CustomDish" element={<CustomDish/>}/>
        <Route path="/:Category/Dishes" element={<Dishes/>} />
        <Route path="/GetRecipe/:DishName" element={<GetRecipe/>} />
      </Routes>

     </BrowserRouter>
    </div>
  )
}