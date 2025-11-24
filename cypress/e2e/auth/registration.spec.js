describe("requirements for field Name", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("empty field - Name is required", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupName").focus();
      cy.get("#signupName").blur();

      cy.get(".invalid-feedback")
        .contains("Name required")
        .should("be.visible");
    });
  });
  it("wrong data - name is invalid", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupName").focus();
      cy.get("#signupName").type("1");
      cy.get("#signupName").blur();
      cy.get(".invalid-feedback")
        .contains("Name is invalid")
        .should("be.visible");
      cy.get(".invalid-feedback")
        .contains("Name has to be from 2 to 20 characters long")
        .should("be.visible");
    });
  });
  it("wrong length - name has to be from 2 to 20 characters long", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupName").focus();
      cy.get("#signupName").type("s");
      cy.get("#signupName").blur();
      cy.get(".invalid-feedback")
        .contains("Name has to be from 2 to 20 characters long")
        .should("be.visible");
    });
  });
  it("border color - red,css", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupName").focus();
      cy.get("#signupName").blur();
      cy.get("#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });
});

describe("requirements for field Last name", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("empty field - Last name is required", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupLastName").focus();
      cy.get("#signupLastName").blur();

      cy.get(".invalid-feedback")
        .contains("Last name required")
        .should("be.visible");
    });
  });
  it("wrong data - Last name is invalid", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupLastName").focus();
      cy.get("#signupLastName").type("1");
      cy.get("#signupLastName").blur();
      cy.get(".invalid-feedback")
        .contains("Last name is invalid")
        .should("be.visible");
      cy.get(".invalid-feedback")
        .contains("Last name has to be from 2 to 20 characters long")
        .should("be.visible");
    });
  });
  it("wrong length - Last name has to be from 2 to 20 characters long", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupLastName").focus();
      cy.get("#signupLastName").type("s");
      cy.get("#signupLastName").blur();
      cy.get(".invalid-feedback")
        .contains("Last name has to be from 2 to 20 characters long")
        .should("be.visible");
    });
  });
  it("border color - red,css", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupLastName").focus();
      cy.get("#signupLastName").blur();
      cy.get("#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });
});

describe("requirements for field Email", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("empty field - Email is required", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupEmail").focus();
      cy.get("#signupEmail").blur();
      cy.get(".invalid-feedback")
        .contains("Email required")
        .should("be.visible");
    });
  });
  it("wrong data - Last name is invalid", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupEmail").focus();
      cy.get("#signupEmail").type("1");
      cy.get("#signupEmail").blur();
      cy.get(".invalid-feedback")
        .contains("Email is incorrect")
        .should("be.visible");
    });
  });
  it("border color - red,css", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupEmail").focus();
      cy.get("#signupEmail").blur();
      cy.get("#signupEmail").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });
});
describe("requirements for field Password", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("empty field - Password is required", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupPassword").focus();
      cy.get("#signupPassword").blur();
      cy.get(".invalid-feedback")
        .contains("Password required")
        .should("be.visible");
    });
  });
  it("wrong data - password", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupPassword").focus();
      cy.get("#signupPassword").type("a");
      cy.get("#signupPassword").blur();
      cy.get(".invalid-feedback")
        .contains(
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        )
        .should("be.visible");
    });
  });
  it("border color - red,css", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupPassword").focus();
      cy.get("#signupPassword").blur();
      cy.get("#signupPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });
});
describe("requirements for field Re-enter password", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("password don't match", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupPassword").focus();
      cy.get("#signupPassword").type("12345678aA");
      cy.get("#signupRepeatPassword").focus();
      cy.get("#signupRepeatPassword").type("1");
      cy.get("#signupRepeatPassword").blur();
      cy.get(".invalid-feedback")
        .contains(
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        )
        .should("be.visible");
    });
  });
  it("for empty field error - Re-enter password required", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupRepeatPassword").focus();
      cy.get("#signupRepeatPassword").blur();
      cy.get(".invalid-feedback")
        .contains("Re-enter password required")
        .should("be.visible");
    });
  });
  it("border color - red,css", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupRepeatPassword").focus();
      cy.get("#signupRepeatPassword").blur();
      cy.get("#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });
});
describe("button register is appear", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("button register is appear", () => {
    cy.get(".btn-primary").contains("Sign up").click();
    cy.get(".modal-content").within(() => {
      cy.get("#signupName").focus();
      cy.get("#signupName").type("Ali");
      cy.get("#signupLastName").focus();
      cy.get("#signupLastName").type("Nas");
      cy.get("#signupEmail").focus();
      cy.get("#signupEmail").type("alainasg@qa.team");
      cy.get("#signupPassword").focus();
      cy.get("#signupPassword").type("12345678aA");
      cy.get("#signupRepeatPassword").type("12345678aA");
      cy.get(".btn-primary").contains("Register").should("not.be.disabled");
      cy.get(".btn-primary")
        .contains("Register")
        .should("have.css", "border-color", "rgb(2, 117, 216)");
      cy.get(".btn-primary").contains("Register").click();
    });
    cy.location("pathname").should("eq", "/panel/garage");
    cy.contains("Add car").should("be.visible");
  });
});
