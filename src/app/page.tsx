"use client";

import SearchBar from "./components/SearchBar";
import { Box, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <main>
      <Box sx={{ backgroundColor: "skyblue", minHeight: "100vh" }}>
        <header>
          <Typography
            color="white"
            fontSize={250}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 6,
            }}
          >
            レシピ
          </Typography>
        </header>
        <Box>
          <SearchBar />
        </Box>
      </Box>
    </main>
  );
}
