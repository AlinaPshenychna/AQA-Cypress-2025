import GaragePage from "../../pages/GaragePage.js";

describe("Garage tests", () => {
  beforeEach(() => {
    const password = "12345678Test";
    const userData = {
      name: "Alina",
      lastName: "Test",
      email: `alitest_${Date.now()}@qa.test`,
      password: password,
      repeatPassword: password,
    };
    cy.registerUser(userData);
  });

  it("should add a new car", () => {
    const mileage = Math.floor(Math.random() * 50000) + 200;

    GaragePage.getAddCarButton().click();

    GaragePage.fillCarForm({ mileage }).then((car) => {
      GaragePage.submitCar();

      cy.contains(`${car.brand} ${car.model}`).should("exist");
    });
  });
});

//npx cypress open --config-file cypress.config.qauto.js
// npx cypress open --config-file cypress.config.qauto2.js
