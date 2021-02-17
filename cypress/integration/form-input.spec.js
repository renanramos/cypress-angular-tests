const { createYield } = require("typescript");

describe("Form input", () => {
  it("Focuses the input on load", () => {
    cy.visit("/");
    cy.focused().should("have.id", "title");
  });
});
