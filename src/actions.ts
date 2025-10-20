"use server";

import { revalidatePath } from "next/cache";
import { db } from "../prisma/db";

export async function fetchRecipes(search: string) {
  if (!search.trim()) return [];

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(search)}`
  );
  if (!res.ok) return [];

  const data = await res.json();
  return data.meals || [];
}

export async function addToFavorites(recipe: {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}) {
  const exists = await db.favorite.findUnique({ where: { idMeal: recipe.idMeal } });
  if (exists) return;

  await db.favorite.create({ data: {
      idMeal: recipe.idMeal,
      strMeal: recipe.strMeal,
      strMealThumb: recipe.strMealThumb,
    },
  });
  revalidatePath("/favorites");
}

export async function deleteFavorite(idMeal: string) {
  await db.favorite.delete({ where: { idMeal } });
  revalidatePath("/favorites");
}

export async function getFavorites() {
  return await db.favorite.findMany();
}