/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `mealId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `mealId` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `idMeal` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strMeal` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strMealThumb` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMeal` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strMeal` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strMealThumb` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idMeal" TEXT NOT NULL,
    "strMeal" TEXT NOT NULL,
    "strMealThumb" TEXT NOT NULL
);
INSERT INTO "new_Favorite" ("id") SELECT "id" FROM "Favorite";
DROP TABLE "Favorite";
ALTER TABLE "new_Favorite" RENAME TO "Favorite";
CREATE UNIQUE INDEX "Favorite_idMeal_key" ON "Favorite"("idMeal");
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idMeal" TEXT NOT NULL,
    "strMeal" TEXT NOT NULL,
    "strMealThumb" TEXT NOT NULL
);
INSERT INTO "new_Recipe" ("id") SELECT "id" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe_idMeal_key" ON "Recipe"("idMeal");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
