import { DumbbellIcon } from "lucide-react";
import React, { useState,useEffect } from "react";
import { UtensilsCrossed } from 'lucide-react';

import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function Recipe() {

  let navigate= useNavigate();
  let [categoryData, setCategoryData]= useState([]);
  
  useEffect(()=>{

    async function getCategory()
    {
      let Res= await axios.get("http://localhost:5500/Finder")
      setCategoryData(Res.data)
    }
    getCategory();
  },[]);

  return (
    <div className="bg-gray-900 min-h-screen p-6 ">
      <h2 className="text-3xl font-bold text-emerald-400 mb-12 text-center mt-10">Explore Categories</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoryData.map(food => (
          <div key={food.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300 cursor-pointer" >
            <div className="flex items-center gap-4" 
              onClick={()=>navigate(`/${food.Category}/Dishes`)}
            >
              <UtensilsCrossed className="text-emerald-400 w-8 h-8" />
              <h3 className="text-white text-xl font-semibold">{food.Category}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}