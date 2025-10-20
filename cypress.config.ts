import { defineConfig } from "cypress";
import { seedRecipes } from "./prisma/seed/recipe";
import { db } from "./prisma/db";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on) {
      on("task", {
        async resetDb() {
          await db.favorite.deleteMany();
          await db.recipe.deleteMany();
          return null;
        },
      });
    },
  },
});
