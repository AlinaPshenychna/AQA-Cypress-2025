import ExpensesPage from "../../pages/ExpensesPage.js";
import GaragePage from "../../pages/GaragePage.js";

describe("Expenses tests", () => {
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

  it("should add a fuel expenses for created car", () => {
    GaragePage.getAddCarButton().click();

    GaragePage.fillCarForm({
      mileage: `${Date.now() % 10000}`,
    }).then((car) => {
      GaragePage.submitCar();

      const vehicleName = `${car.brand} ${car.model}`;

      ExpensesPage.getAddFuelExpenseBtn();
      ExpensesPage.fillExpenseForm({
        vehicle: vehicleName,
        miliage: Number(car.mileage) + 1,
        liters: Number(car.mileage),
        cost: "1000",
      });

      ExpensesPage.getAddExpenseBtn();
    });
  });
});
