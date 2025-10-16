import { Box, Container } from "@mui/material";
import { Recipe } from "./SearchBar";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        padding: 8,
        flexWrap: "wrap",
      }}
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </Container>
  );
}
