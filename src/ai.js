import axios from "axios";

const API_URL = "https://claude-chef-backed.onrender.com/api/get-recipe/";

export async function getRecipeFromMistral(ingredientsArr) {
  try {
    const response = await axios.post(API_URL, {
      ingredients: ingredientsArr,
    });

    return response.data.recipe;

  } catch (error) {
    console.error(
      "Backend API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
}
