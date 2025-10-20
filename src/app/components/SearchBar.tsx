"use client";

import { Box, Button, Input, Typography } from "@mui/material";
import { useState, useTransition } from "react";
import RecipeList from "./RecipeList";
import { fetchRecipes } from "@/actions";

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) {
      setError("Sökfältet är tomt");
      setRecipes([]);
      setHasSearched(false);
      return;
    }
    setError("");
    setHasSearched(true);

    startTransition(async () => {
      const recipeData = await fetchRecipes(search);
      if (!recipeData.length) setError("Inga recept hittades");
      setRecipes(recipeData);
    });
  };

  return (
    <section>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Input
          data-cy="search-input"
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
        <Button data-cy="search-button" onClick={handleSearch}>
          Sök
        </Button>
        <Button href="/favorites">Favoriter!</Button>
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
          variant="h4"
        >
          {error}
        </Typography>
      )}
      <RecipeList recipes={recipes} />
      {!error && hasSearched && recipes.length === 0 && !error && (
        <Typography
          data-cy="no-recipe-found"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
            color: "red",
            fontWeight: 600,
          }}
          variant="h4"
        >
          Inga recept hittades
        </Typography>
      )}
    </section>
  );
}
