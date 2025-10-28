import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ChefHat, Book, Loader2 } from 'lucide-react';
import AskAi from '../Pages/AskAi.js';

export default function GetRecipe() {
  let { DishName } = useParams();
  let [aiRes, setAiRes] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  async function RecipeFind() {
    try {
      setIsLoading(true);
      let Res = await AskAi(`Generate a recipe for ${DishName} with:
      • Total cooking time
      • List of ingredients with quantities
      • Step-by-step cooking instructions
      Please keep it under 200 words and format with clear bullet points.`);
      setAiRes(Res);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <ChefHat className="text-emerald-400" size={28} />
            <h1 className="text-4xl font-bold text-white">
              Recipe for <span className="text-emerald-400">{DishName}</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg mb-8">
            Discover how to make this delicious dish
          </p>
          
          {/* Button Section */}
          <button
            onClick={RecipeFind}
            disabled={isLoading}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Generating Recipe...
              </>
            ) : (
              <>
                <Book size={20} />
                Get Recipe Now
              </>
            )}
          </button>
        </div>

        {/* Recipe Content */}
        {aiRes && (
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="border-b border-gray-700 bg-gray-800/50 p-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Book className="text-emerald-400" size={20} />
                Recipe Details
              </h2>
            </div>
            
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <div className="bg-gray-700/30 rounded-lg p-6">
                  <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {aiRes.split('\n').map((line, index) => {
                      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                        return (
                          <div key={index} className="flex items-start gap-3 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5"></div>
                            <p>{line.replace(/^[•-]\s*/, '')}</p>
                          </div>
                        );
                      } else if (line.trim().match(/^\d+\./)) {
                        return (
                          <div key={index} className="flex items-start gap-3 mb-3">
                            <span className="text-emerald-400 font-medium">{line.match(/^\d+/)[0]}.</span>
                            <p>{line.replace(/^\d+\.\s*/, '')}</p>
                          </div>
                        );
                      } else if (line.trim()) {
                        return (
                          <p key={index} className="mb-3">
                            {line}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!aiRes && !isLoading && (
          <div className="bg-gray-800 rounded-xl p-8 text-center">
            <p className="text-gray-400 text-lg">
              Click the button above to get the recipe details
            </p>
          </div>
        )}
      </div>
    </div>
  );
}