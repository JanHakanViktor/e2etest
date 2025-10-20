"use client";

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Recipe } from "./SearchBar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState, useTransition } from "react";
import { getFavorites, deleteFavorite, saveFavorite } from "@/actions";

interface Props {
  recipe: Recipe;
  onChange?: (idMeal: string) => void;
}

export default function RecipeList({ recipe, onChange }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function checkFavorite() {
      const favorites = await getFavorites();
      const match = favorites.some((f) => f.idMeal === recipe.idMeal);
      setIsFavorite(match);
    }
    checkFavorite();
  }, [recipe.idMeal]);

  const handleFavorite = async () => {
    startTransition(async () => {
      if (isFavorite) {
        await deleteFavorite(recipe.idMeal);
        setIsFavorite(false);
        if (onChange) onChange(recipe.idMeal);
      } else {
        await saveFavorite(recipe);
        setIsFavorite(true);
      }
    });
  };

  return (
    <Box data-cy="recipe-card" sx={{ padding: 2 }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          data-cy="recipe-title"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              シ
            </Avatar>
          }
          title={recipe.strMeal}
        />
        <CardMedia
          component="img"
          height="300"
          image={recipe.strMealThumb}
          alt={recipe.strMeal}
          data-cy="recipe-image"
        />
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center", padding: 2 }}
        >
          <IconButton
            data-cy="favorite-button"
            aria-label="add to favorites"
            onClick={handleFavorite}
          >
            <FavoriteIcon color={isFavorite ? "error" : "inherit"} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
