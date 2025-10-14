import SearchBar from "./components/SearchBar";
import { Box, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <Box sx={{ backgroundColor: "skyblue", minHeight: "100vh" }}>
        <Typography
          color="white"
          fontSize={250}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "skyblue",
            paddingBottom: 6,
          }}
        >
          レシピ
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
        </Box>
      </Box>
    </>
  );
}
