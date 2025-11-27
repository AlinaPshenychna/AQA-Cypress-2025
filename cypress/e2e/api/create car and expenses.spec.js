import { faker } from "@faker-js/faker";

describe("Cars API + Expenses UI", () => {
  let userData;
  let carId;

  before(() => {
    const password = `Qwerty${faker.number.int({ min: 100, max: 999 })}`;
    userData = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password,
      repeatPassword: password,
    };

    cy.request({
      method: "POST",
      url: "/api/auth/signup",
      body: userData,
      failOnStatusCode: false,
    }).then((res) => {
      expect([201, 400]).to.include(res.status);
    });
  });

  it("create car via API and add expenses via UI", () => {
    const mileage = faker.number.int({ min: 100, max: 10000 });

    cy.request({
      method: "POST",
      url: "/api/cars",
      body: {
        carBrandId: 1,
        carModelId: 1,
        mileage,
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      carId = res.body.data.id;
      cy.log("Car created with id:", carId);

      cy.visit("/panel/garage");

      cy.get(".car", { timeout: 10000 }).should("exist");

      cy.contains(".car", "Audi").within(() => {
        cy.contains("Add fuel expense").click();
      });

      cy.get("#addExpenseMileage")
        .clear({ force: true })
        .type(`${mileage + 1}`, { force: true });
      cy.get("#addExpenseLiters").clear().type("20");
      cy.get("#addExpenseTotalCost").clear().type("900");

      cy.contains(".modal-content .btn-primary", "Add").click();
    });
  });
});
