import { Box, Container } from "@mui/material";
import Image from "next/image";
import { Recipes } from "./SearchBar";

export default function RecipeList({ recipes }: { recipes: Recipes[] }) {
  if (!recipes.length) return null;
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 4,
        flexWrap: "wrap",
      }}
    >
      {recipes.map((recipe) => (
        <Box
          key={recipe.idMeal}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 2,
            padding: 8,
          }}
        >
          <strong>{recipe.strMeal}</strong>
          <Image
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width={250}
            height={250}
            style={{ borderRadius: "8px" }}
          />
        </Box>
      ))}
    </Container>
  );
}
