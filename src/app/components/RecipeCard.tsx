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
import { useState, useTransition } from "react";
import { deleteFavorite, saveFavorite } from "@/actions";

export default function RecipeList({ recipe }: { recipe: Recipe }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleFavorite = () => {
    startTransition(async () => {
      if (isFavorite) {
        await deleteFavorite(recipe.idMeal);
        setIsFavorite(false);
      } else {
        await saveFavorite(recipe);
        setIsFavorite(true);
      }
    });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              シ
            </Avatar>
          }
          title={recipe.strMeal}
        />
        <CardMedia
          component="img"
          height="250"
          image={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center", padding: 2 }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavorite}
            sx={{ width: "8rem" }}
          >
            <FavoriteIcon color={isFavorite ? "error" : "inherit"} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
