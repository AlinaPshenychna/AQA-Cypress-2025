import { faker } from "@faker-js/faker";

describe("Cars API", () => {
  let userData;

  before(() => {
    const password = `Qwerty${faker.number.int({ min: 100, max: 999 })}`;
    userData = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password,
      repeatPassword: password,
    };

    cy.api({
      method: "POST",
      url: "/api/auth/signup",
      body: userData,
    })
      .its("status")
      .should("eq", 201);

    cy.api({
      method: "POST",
      url: "/api/auth/signin",
      body: {
        email: userData.email,
        password: userData.password,
        remember: false,
      },
    }).then((res) => {
      const token = res.body.data.accessToken;

      cy.visit("/panel/garage", {
        onBeforeLoad(win) {
          win.localStorage.setItem("token", token);
        },
      });
    });
  });

  it("create car", () => {
    cy.api("/api/cars/brands")
      .its("body.data")
      .then((brands) => {
        const brand = brands[0];

        cy.api("/api/cars/models")
          .its("body.data")
          .then((models) => {
            const model = models.find((m) => m.carBrandId === brand.id);

            const body = {
              carBrandId: brand.id,
              carModelId: model.id,
              mileage: faker.number.int({ min: 100, max: 10000 }),
            };

            cy.api({
              method: "POST",
              url: "/api/cars",
              body,
            }).then((response) => {
              expect(response.status).to.eq(201);
              cy.log("Car created:", response.body.data);
            });
          });
      });
  });
});
