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

  const handleSearch = async () => {
    if (!search.trim()) {
      setError("Sökfältet är tomt");
      setRecipes([]);
      return;
    }
    setError("");

    startTransition(async () => {
      const data = await fetchRecipes(search);
      if (!data.length) setError("Inga recept hittades");
      setRecipes(data);
    });
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
