describe("Main page", () => {
  const expetedNavLinks = [
    " Garage ",
    " Fuel expenses ",
    " Instructions ",
    " Log out ",
  ];

  beforeEach(() => {
    cy.visit("/");
    cy.contains("Guest log in").click();
  });

  it("all nav links be visible", () => {
    cy.get("nav.sidebar a").then(($links) => {
      const linkTexts = $links.map((index, link) => link.textContent).get();
      expect(linkTexts, "Navigation links should be valid").to.be.deep.eq(
        expetedNavLinks
      );
    });
  });
});
