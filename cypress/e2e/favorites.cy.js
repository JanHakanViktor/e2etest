describe("Favorite recipes", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.task("resetDb");
  });

  it("Should search for a recipe", () => {
  cy.get("input[placeholder='Sök recept']").type("salmon");
    cy.contains("Sök").click();
    cy.contains("Salmon").should("exist");
    });

  it("Should mark a recipe as favorite", () => {
     cy.get("input[placeholder='Sök recept']").type("salmon");
     cy.contains("Sök").click();
     cy.contains("Salmon").should("exist");
     cy.get("button[aria-label='add to favorites']").first().click();
     cy.visit("/favorites");
     cy.contains("Salmon").should("exist");
  });

  it("Should delete a favorite recipe", () => {
    cy.get("input[placeholder='Sök recept']").type("salmon");
    cy.contains("Sök").click();
    cy.contains("Salmon").should("exist");
    cy.get("button[aria-label='add to favorites']").first().click();
    cy.visit("http://localhost:3000/favorites")
    cy.contains("Salmon").should("exist");
    cy.get("button[aria-label='add to favorites']").first().click();
  
  });
});

// Insåg efter jag skrev klart att allt kunde egentligen falla inom samma test. 