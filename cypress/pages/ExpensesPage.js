import GaragePage from "./GaragePage.js";

class Expenses {
  getAddFuelExpenseBtn() {
    cy.get(".car_add-expense").click();
  }
  fillExpenseForm({ vehicle, miliage, liters, cost }) {
    cy.get("#addExpenseCar").type(vehicle);
    cy.get("#addExpenseMileage").clear().type(miliage);
    cy.get("#addExpenseLiters").type(liters);
    cy.get("#addExpenseTotalCost").type(cost);
  }
  getAddExpenseBtn() {
    cy.get(".modal-content").within(() => {
      cy.get(".btn-primary").contains("Add").click();
    });
  }
}

export default new Expenses();
