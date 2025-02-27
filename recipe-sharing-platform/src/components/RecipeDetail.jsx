import React, { useState, useEffect } from "react";

const RecipeDetail = () => {
  const [recipes, setRecipes] = useState([]);


  ["useEffect", "useParams", "data.json", "ingredients", "instructions", "image"]
  useEffect(() => {
    // Fetch data from the local JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 grid-cols-1 sm">
      <h1 className="text-2xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetail;
