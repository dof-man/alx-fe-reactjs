// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

function AddRecipeForm() {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparationSteps, setPreparationSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form (e.g., send to API or state)
      alert('Recipe submitted successfully!');
      // Reset form
      setRecipeTitle('');
      setIngredients('');
      setPreparationSteps('');
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!recipeTitle) formErrors.recipeTitle = 'Recipe title is required';
    if (!ingredients || ingredients.split('\n').length < 2)
      formErrors.ingredients = 'Ingredients must contain at least two items';
    if (!preparationSteps) formErrors.preparationSteps = 'Preparation steps are required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Recipe Title</label>
          <input
            type="text"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.recipeTitle && <p className="text-red-500 text-xs">{errors.recipeTitle}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Ingredients</label>
          <textarea
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.ingredients && <p className="text-red-500 text-xs">{errors.ingredients}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Preparation Steps</label>
          <textarea
            rows="6"
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.preparationSteps && <p className="text-red-500 text-xs">{errors.preparationSteps}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
