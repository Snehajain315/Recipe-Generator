import React from 'react';
import { Search, UtensilsCrossed, Clock, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    let navigate= useNavigate();
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">

          <h1 className="text-5xl font-bold text-white mb-6">
            Find Your Perfect Recipe
          </h1>

          <p className="text-gray-300 text-xl mb-8">
            Discover thousands of recipes and create your own custom dishes
          </p>

          <button onClick={()=>navigate("./Recipe")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition duration-150 inline-flex items-center gap-2"
          >
            <Search size={20} />
            Start Exploring
          </button>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-800 p-6 rounded-xl text-center">

            <UtensilsCrossed className="text-emerald-400 w-12 h-12 mx-auto mb-4" />

            <h3 className="text-white text-xl font-semibold mb-2">
              Easy Recipes
            </h3>

            <p className="text-gray-400">
              Find recipes that match your skill level and available ingredients
            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <Clock className="text-emerald-400 w-12 h-12 mx-auto mb-4" />

            <h3 className="text-white text-xl font-semibold mb-2">
              Quick Meals
            </h3>

            <p className="text-gray-400">
              Discover recipes that fit your schedule, from 15-minute meals to slow-cooked dishes
            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">

            <BookOpen className="text-emerald-400 w-12 h-12 mx-auto mb-4" />

            <h3 className="text-white text-xl font-semibold mb-2">
              Custom Dishes
            </h3>

            <p className="text-gray-400">
              Create and save your own recipes with our easy-to-use tools
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;