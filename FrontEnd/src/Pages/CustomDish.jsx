import React, { useState } from 'react';
import { Bot, ChefHat, Loader2 } from 'lucide-react';
import AskAi from '../Pages/AskAi'

const CustomDish = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const ingredients = e.target[0].value;
      const dishType = e.target[1].value;
      const response = await AskAi(`generate a ${dishType} recipe using ${ingredients}, in 200 Words`);
      setRecipe(response);
    } catch (error) {
      console.error('Error generating recipe:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat className="text-emerald-400 w-8 h-8" />
            <h1 className="text-4xl font-bold text-white">Custom Recipe Generator</h1>
          </div>
          <p className="text-gray-300 text-lg">
            Enter your ingredients and desired dish type to get an AI-generated recipe
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">
                Available Ingredients
              </label>
              <textarea 
                className="w-full bg-gray-700 text-white rounded-lg p-3 min-h-24 border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition duration-200"
                placeholder="Enter ingredients (e.g., chicken, rice, tomatoes)"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">
                Type of Dish
              </label>
              <input 
                className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition duration-200"
                placeholder="Enter dish type (e.g., curry, pasta, salad)"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Generating Recipe...</span>
                </>
              ) : (
                <>
                  <Bot className="h-5 w-5" />
                  <span>Generate Recipe</span>
                </>
              )}
            </button>
          </form>

          {/* Results Section */}
          {recipe && (
            <div className="mt-8 p-6 bg-gray-700 rounded-lg border border-gray-600">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-emerald-400" />
                Generated Recipe
              </h3>
              <p className="text-gray-300 whitespace-pre-wrap">{recipe}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomDish;