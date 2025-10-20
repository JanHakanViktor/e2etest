# Recipe Finder

## Beskrivning

Sök recept genom TheMealDB API och spara favoriter. Projektet har testats löpande genom E2E-tester skrivna i Cypress och projektet är utvecklad med TDD som grundprincip.

## Installera och initiera databasen

1. Installera beroenden:

   ```bash
   npm install
   ```

2. Skapa en .env i projektroten med en SQLite URL (Om den ej redan finns):

   ```env
   DATABASE_URL="file:./dev.db"
   ```

3. Generera Prisma client:

   ```bash
   npm run generate
   ```

4. Pusha Prisma-schema till databasen:

   ```bash
   npm run push
   ```

5. Seed databasen med exempeldata:
   ```bash
   npm run seed
   ```
   (Se seeding i [prisma/seed/index.ts](prisma/seed/index.ts).)

## Kör applikationen

Starta dev-servern (Next.js körs på port 3000 som Cypress förväntar sig):

```bash
npm run dev
```

Öppna webben på: http://localhost:3000

## Kör E2E-tester (Cypress)

1. Se till att dev-servern körs på port 3000.
2. Öppna Cypress:

```bash
npx cypress open
```

eller kör headless:

```bash
npx cypress run
```

## Felsökning

- Om Prisma-klienten saknas: kör `npm run generate`.
- Cypress-tester förutsätter att servern är up och att `DATABASE_URL` är satt.
