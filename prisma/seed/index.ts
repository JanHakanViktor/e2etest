import { db } from "../db";
import { seedRecipes } from "./recipe";

async function main() {
  console.log("Seeding DB");
  await seedRecipes();
}

main()
  .then(async () => {
    await db.$disconnect();
    console.log("Seeding complete");
  })
  .catch(async (e) => {
    console.error("Seeding failed", e);
    await db.$disconnect();
    process.exit(1);
  });
