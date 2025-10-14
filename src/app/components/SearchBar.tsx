"use client";

import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import RecipeList from "./RecipeList";

export interface Recipes {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!search.trim()) {
      setError("Sökfältet är tomt");
      setRecipes([]);
      return;
    }
    setError("");

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();

      if (!data.meals) {
        setRecipes([]);
      } else {
        setRecipes(data.meals);
      }
    } catch (error) {
      setError("Ett fel uppstod, vänligen försök igen.");
    }
  };

  return (
    <section>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Input
          sx={{
            width: "30rem",
            backgroundColor: "white",
            padding: 2,
            borderRadius: 2,
          }}
          color="primary"
          placeholder="Sök recept"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
        <Button onClick={handleSearch}>Sök</Button>
      </Box>
      {error && (
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
            color: "red",
            fontWeight: 600,
          }}
        >
          {error}
        </Typography>
      )}
      <RecipeList recipes={recipes} />
      {!error && search.trim() && recipes.length === 0 && !error && (
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
            color: "red",
            fontWeight: 600,
          }}
        >
          Inga recept hittades
        </Typography>
      )}
    </section>
  );
}
