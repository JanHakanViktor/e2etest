describe("User flow for recipe finder", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should search for recipies and render results", () => {
    cy.get("input[placeholder='Sök recept']").type("chicken");
    cy.contains("Sök").click();
    cy.contains("Chicken").should("exist");
  });

  it("should throw error message if empty search", () => {
    cy.contains("Sök").click();
    cy.contains("Sök recept").should("exist");
    cy.get("img").should("not.exist");
  });

  it("should show message if no recipies are found", () => {
    cy.get("input[placeholder='Sök recept']").type("qwertyuiop");
    cy.contains("Sök").click();
    cy.contains("Inga resultat hittades").should("exist");
    cy.get("img").should("not.exist");
  });
});
