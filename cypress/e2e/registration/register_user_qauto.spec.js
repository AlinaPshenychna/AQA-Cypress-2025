
describe("Signup new user qauto2", () => {
  const password = "12345678Test";
  const userData = {
    name: "Ivan",
    lastName: "Test",
    email: "supertest3@qa.team",
    password: password,
    repeatPassword: password,
  };

  it("should create new user qauto", () => {
    cy.visit("/");
    cy.get(".btn-primary").as("signupBtn");
    cy.get("@signupBtn").click();

    cy.get(".modal-content").within(() => {
      cy.get("#signupName").type(userData.name);
      cy.get("#signupLastName").type(userData.lastName);
      cy.get("#signupEmail").type(userData.email);
      cy.get("#signupPassword").type(userData.password);
      cy.get("#signupRepeatPassword").type(userData.repeatPassword);
      cy.get(".btn-primary").click();
    });
    cy.get(".btn-primary").contains("Add car").should("be.visible")
  });
});
