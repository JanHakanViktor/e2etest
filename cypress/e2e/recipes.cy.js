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
    cy.get("input[placeholder='Sök recept']").type(" ");
    cy.contains("Sök").click();
    cy.contains("Sökfältet är tomt").should("exist");
    cy.contains("img").should("not.exist");
  });

  it("should throw error message if no recipes are found", () => {
    cy.get("input[placeholder='Sök recept']").type("qwertyuiop");
    cy.contains("Sök").click();
    cy.contains("Inga recept hittades").should("exist");
    cy.get("img").should("not.exist");
  });
});
