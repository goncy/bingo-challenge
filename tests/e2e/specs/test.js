describe("Bingo", () => {
  before(() => {
    cy.visit("/");
  });

  it("Can't get next without playing", () => {
    cy.get("[data-test='container']").type("{rightarrow}");

    cy
      .get("[data-test='board'] [data-test='disabled=true']")
      .should("have.length", 90);
  });

  it("Can play", () => {
    cy.get("[data-test='play']").click();

    cy.get("[data-test='board']").within(() => {
      cy.get("[data-test='disabled=false']").should("have.length", 1);

      cy.root().trigger("keydown", {code: "ArrowRight", force: true});
      cy.root().trigger("keydown", {code: "ArrowRight", force: true});

      cy.get("[data-test='disabled=false']").should("have.length", 3);
    });
  });

  it("Can reset", () => {
    cy.get("[data-test='board']").within(() => {
      cy.get("[data-test='disabled=false']").should("have.length", 3);

      cy.root().trigger("keydown", {code: "Space", force: true});

      cy.get("[data-test='disabled=false']").should("have.length", 0);
    });
  });
});
