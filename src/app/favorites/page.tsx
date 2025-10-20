"use client";

import { getFavorites } from "@/actions";
import { Box, Button, Typography } from "@mui/material";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { Recipe } from "@/generated/prisma";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getFavorites();
      setFavorites(res);
    }
    fetchData();
  }, []);

  const handleRemoveFavorite = (idMeal: string) => {
    setFavorites((prev) => prev.filter((f) => f.idMeal !== idMeal));
  };

  return (
    <Box
      data-cy="favorites-page"
      sx={{
        backgroundColor: "lightblue",
        height: "100vh",
      }}
    >
      <Button sx={{ padding: 4 }} href="/">
        Tillbaka till alla recept
      </Button>

      <Typography
        sx={{ display: "flex", justifyContent: "center", padding: 4 }}
        variant="h2"
      >
        Mina favoritrecept
      </Typography>

      <Box
        data-cy="favorites-list"
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {favorites.length ? (
          favorites.map((f) => (
            <RecipeCard
              key={f.idMeal}
              recipe={f}
              onChange={handleRemoveFavorite}
            />
          ))
        ) : (
          <Typography
            data-cy="no-favorites-message"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 2,
              color: "red",
              fontWeight: 600,
            }}
            variant="h4"
          >
            Du har inte favoritmarkerat ett recept ännu.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
