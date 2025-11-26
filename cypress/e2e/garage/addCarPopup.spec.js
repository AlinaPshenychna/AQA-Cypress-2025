// import "../../support/commands.js";
import fakeCarBrands from "../../fixtures/fakeCarBrands.json";

describe("Main page, popup", () => {
  beforeEach(() => {
    cy.loginAsGuest();
  });

  it("brands response should be successful", () => {
    //intercept should be added before click and request
    cy.intercept("GET", "/api/cars/brands").as("getBrandsRequest");
    cy.get(".btn-primary").click();

    cy.wait("@getBrandsRequest")
      .its("response.statusCode")
      .should("equal", 200);
  });
  it("popup should be disabled when brands response status code is 404", () => {
    //intercept should be added before click and request
    cy.intercept("GET", "/api/cars/brands", { statusCode:404})
    cy.get(".btn-primary").click();
    cy.get(".modal-content").should("be.visible")
    .within(()=>{
        cy.get("#addCarBrand").should("be.disabled")
    })
  });
});
