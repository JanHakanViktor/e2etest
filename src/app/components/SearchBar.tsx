"use client";

import { Box, Button, Input } from "@mui/material";
import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
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
      <Button>Sök</Button>
    </Box>
  );
}
