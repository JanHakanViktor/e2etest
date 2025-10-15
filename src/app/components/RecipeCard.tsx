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
import { useState } from "react";

export default function RecipeList({ recipe }: { recipe: Recipe }) {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
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
          alt="Paella dish"
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
            <FavoriteIcon color={favorite ? "error" : "inherit"} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
