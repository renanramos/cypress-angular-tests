describe("Form input", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Focuses the input on load", () => {
    cy.focused().should("have.id", "title");
  });
  
  it.only("Accepts input", () => {
    cy.get("#title").type("New todo").should("have.value", "New todo");
  });
});
