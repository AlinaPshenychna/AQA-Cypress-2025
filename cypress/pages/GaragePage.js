class GaragePage {
  getAddCarButton() {
    return cy.contains(".btn-primary", "Add car");
  }
  fillCarForm({ mileage }) {
    return cy.get("#addCarBrand").then(($brand) => {
      const count = $brand.find("option").length;
      const index = Math.floor(Math.random() * (count - 1)) + 1;
      cy.get("#addCarBrand").select(index);

      return cy.get("#addCarModel").then(($model) => {
        const count2 = $model.find("option").length;
        const index2 = Math.floor(Math.random() * (count2 - 1)) + 1;
        cy.get("#addCarModel").select(index2);

        cy.get("#addCarMileage").type(mileage);

        return cy
          .get("#addCarBrand option:selected")
          .invoke("text")
          .then((brandText) => {
            return cy
              .get("#addCarModel option:selected")
              .invoke("text")
              .then((modelText) => {
                const car = {
                  brand: brandText.trim(),
                  model: modelText.trim(),
                  mileage,
                };
                this.createdCar = car;
                return cy.wrap(car);
              });
          });
      });
    });
  }

  submitCar() {
    cy.get(".modal-content .btn-primary").contains("Add").click();
  }

  getCreatedCar() {
    return this.createdCar;
  }
}

export default new GaragePage();
