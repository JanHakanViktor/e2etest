import { db } from "../db";

export async function seedRecipes() {
  const mockedRecipes = [
    {
      idMeal: "123",
      strMeal: "Tonkotsu Ramen",
      strMealThumb: "https://example.com/image1.jpg",
    },
    {
      idMeal: "456",
      strMeal: "Shio Ramen",
      strMealThumb: "https://example.com/image2.jpg",
    },
    {
      idMeal: "789",
      strMeal: "Chicken Katsu",
      strMealThumb: "https://example.com/image3.jpg",
    },
  ];

  for (const recipe of mockedRecipes) {
    await db.recipe.upsert({
      where: { idMeal: recipe.idMeal },
      update: recipe,
      create: recipe,
    });
  }
}
