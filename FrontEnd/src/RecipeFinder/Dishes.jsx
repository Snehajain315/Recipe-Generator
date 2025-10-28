import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Utensils, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";



export default function Dishes()
{

   let {Category}=useParams();
   let [DishesData,setDishesData]= useState([]);


   useEffect(()=>{
    async function getDishes()
    {
        let Res= await axios.get(`https://recipe-generator-2-3dyc.onrender.com/api/category/dishes/${Category}`)
        setDishesData(Res.data);
    }
    getDishes();
   },[])

   
   let navigate = useNavigate();
//  let Show= DishesData.filter((e)=>e.Category==Category);


 return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Elegant Header */}
        <div className="border-b border-gray-700 pb-8 mb-12">
          <div className="text-center">
            <span className="text-emerald-400 text-sm tracking-wider uppercase mb-2 block">
              Culinary Collection
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">
              {Category} Specialties
            </h1>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Elegant Dish List */}
        <div className="grid gap-4">
          {DishesData.map((dish) => (
            <div 
              key={dish.id}
              className="group bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-emerald-400/10 transition-colors duration-300">
                    <Utensils className="text-emerald-400" size={20} />
                  </div>
                  <h3 className="text-xl font-medium text-white">{dish.name}</h3>
                </div>
                <button 
                onClick={()=>navigate(`/GetRecipe/${dish.name}`)}
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                  View Recipe
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {DishesData.length === 0 && (
          <div className="text-center py-20 border border-gray-700 rounded-lg">
            <span className="text-gray-400 text-lg">
              No dishes available for {Category}
            </span>
          </div>
        )}

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-px bg-gray-700"></div>
            <span className="text-emerald-400">●</span>
            <div className="w-12 h-px bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}