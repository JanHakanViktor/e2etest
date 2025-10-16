describe("Favorite recipes", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("Should list all favorite recipes", () => {
    cy.request("/api/favorites").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
    });
  });

  it("Should mark a recipe as favorite", () => {
    cy.request("POST", "api/favorites", {
      idMeal: "123",
      strMeal: "Ramen",
      strMealThumb: "https://exampleImage.com",
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.strMeal).to.eq("Ramen");
    });
  });
});

it("Should delete a favorite recipe", () => {
  cy.request("POST", "/api/favorites", {
    idMeal: "666",
    strMeal: "Random recipe",
    strMealThumb: "https://exampleImage.com",
  }).then((post) => {
    const idMeal = post.body.idMeal;
    cy.request("DELETE", `/api/favorites/${idMeal}`).then((del) => {
      expect(del.status).to.eq(204);
    });
  });
});
