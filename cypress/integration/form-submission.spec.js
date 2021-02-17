const { createYield } = require("typescript");

describe("Form submit", () => {
  it("Adds a new todo item", () => {
    const newTodo = { id: 123, title: "Buy pizza", completed: false };
    cy.server();
    cy.route({
      method: "POST",
      url: "/ToDoModels",
      response: newTodo,
    }).as("save");

    cy.seedAndVisit();
    cy.fixture("todos").then((todos) => {
      cy.route("GET", "/ToDoModels", [...todos, newTodo]).as("second-load");
    });

    cy.get("#title").type(newTodo.title).type("{enter}");
    cy.wait("@save");
    cy.wait("@second-load");

    cy.get(".task-wrapper").should("have.length", 5);
  });
});
