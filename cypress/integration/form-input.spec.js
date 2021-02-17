describe("Form input", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it("Focuses the input on load", () => {
    cy.focused().should("have.id", "title");
  });
  
  it.only("Accepts input", () => {
    const value = "New todo";
    cy.get("#title").type(value).should("have.value", value);
  });
});
