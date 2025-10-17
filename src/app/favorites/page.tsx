import { getFavorites } from "@/actions";
import { Box, Typography } from "@mui/material";
import RecipeCard from "../components/RecipeCard";

export default async function FavoritesPage() {
  const favorites = await getFavorites();

  return (
    <Box>
      <Typography variant="h2">Mina favoritrecept</Typography>
      <Box>
        {favorites.length ? (
          favorites.map((f) => <RecipeCard key={f.idMeal} recipe={f} />)
        ) : (
          <Typography>Du har inte favoritmarkerat ett recept ännu.</Typography>
        )}
      </Box>
    </Box>
  );
}
