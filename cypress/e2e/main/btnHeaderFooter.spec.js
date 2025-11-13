describe("Check all button from footer and header, non login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("header btn", () => {
    cy.get(".btn-primary").contains("Sign up");
    cy.get(".btn-primary").should("be.visible");
  });

  it("fotter social links", () => {
    cy.get(".contacts_socials").within(() => {
      cy.get("a").should("have.length", 5);
      cy.get("a")
        .eq(0)
        .should(
          "have.attr",
          "href",
          "https://www.facebook.com/Hillel.IT.School"
        );
      cy.get("a")
        .eq(1)
        .should("have.attr", "href", "https://t.me/ithillel_kyiv");
      cy.get("a")
        .eq(2)
        .should(
          "have.attr",
          "href",
          "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"
        );
      cy.get("a")
        .eq(3)
        .should(
          "have.attr",
          "href",
          "https://www.instagram.com/hillel_itschool/"
        );
      cy.get("a")
        .eq(4)
        .should(
          "have.attr",
          "href",
          "https://www.linkedin.com/school/ithillel/"
        );
    });
  });

  it("footer right side links", () => {
    cy.get(".container .row .mt-md-0").within(() => {
      cy.get("a").should("have.length", 2);
      cy.get("a").eq(0).should("have.attr", "href", "https://ithillel.ua");
      cy.get("a")
        .eq(1)
        .should("have.attr", "href", "mailto:developer@ithillel.ua");
    });
  });
});
