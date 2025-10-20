describe("Favorite recipes", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.task("resetDb");
  });

  it("Should search for a recipe, add to favorite and verify in favorite page", () => {
    cy.get('[data-cy="search-input"]').type("salmon");
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="recipe-card"]').first().within(() => {cy.get('[data-cy="favorite-button"]').click();});
    cy.wait(500);
    cy.visit("/favorites");
    cy.get('[data-cy="favorites-page"]').should("be.visible");
    cy.get('[data-cy="recipe-card"]').should("have.length.at.least", 1);
    cy.contains("Salmon").should("exist");
    });

  it("Should delete a favorite recipe", () => {
    cy.get("input[placeholder='Sök recept']").type("salmon");
    cy.contains("Sök").click();
    cy.contains("Salmon").should("exist");
    cy.get('[data-cy="recipe-card"]').first().within(() => {cy.get('[data-cy="favorite-button"]').click();});
    cy.wait(500);
    cy.visit("/favorites");
    cy.get("[data-cy='recipe-card']").should("have.length", 1);
    cy.get("[data-cy='favorite-button']").click();
  
  });

  it("Should not show favorite recipes if no favorites", () => {
    cy.visit("/favorites");
    cy.get('[data-cy="recipe-card"]').should("not.exist");
    cy.get('[data-cy="no-favorites-message"]').should("be.visible");
  }) 
});

// Insåg efter jag skrev klart att allt kunde egentligen falla inom samma test. 