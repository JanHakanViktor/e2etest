describe("User flow for recipe finder", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should search for recipes and render results", () => {
    cy.get('[data-cy="search-input"]').type("chicken");
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="recipe-card"]').should("have.length.at.least", 1);
    cy.get('[data-cy="recipe-card"]').first().within(() => {
      cy.get('[data-cy="recipe-title"]').should("exist");
    });
  });

  it("should throw error message if empty search", () => {
    cy.get('[data-cy="search-button"]').click();
    cy.contains("Sökfältet är tomt").should("be.visible");
    cy.get('[data-cy="recipe-card"]').should("not.exist");
  });

  it("should throw error message if no recipes are found", () => {
    cy.get('[data-cy="search-input"]').type("qwertyuiop");
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="no-recipe-found"]').should("be.visible");
    cy.get('[data-cy="recipe-card"]').should("not.exist");
  });
});
