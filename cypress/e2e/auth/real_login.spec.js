import { faker } from "@faker-js/faker";

describe("Auth - login", () => {
  const password = "12345678Test"
  const userData = {
    name: "Alina",
    lastName: "Test",
    email: "alitest@qa.test",
    password: password,
    repeatPassword: password,
  };

  it("should create new user and logout", () => {
    cy.visit("/");
    cy.get(".btn-primary").as("loginBtn");
    cy.get("@loginBtn").click();

    cy.get(".modal-content").within(() => {
      cy.get("#signupName").type(userData.name);
      cy.get("#signupLastName").type(userData.lastName);
      cy.get("#signupEmail").type(userData.email);
      cy.get("#signupPassword").type(userData.password);
      cy.get("#signupRepeatPassword").type(userData.repeatPassword);
      cy.get(".btn-primary").click();
    });

    cy.get("#userNavDropdown").click();
    cy.get(".user-nav_menu .user-nav_link").contains("Logout").click();
  });

  it("should login successfully with valid credentials", () => {
    cy.login(userData.email, userData.password);

    cy.location("pathname").should("eq","/panel/garage");
    cy.containes("Add car").should("be visible");

  });
});
