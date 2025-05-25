describe('Halaman Index', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Tombol Explore scroll ke daftar game', () => {
    cy.contains('Explore').click();
    cy.url().should('include', '#daftarGame'); // asumsi ada anchor
  });

  it('Pencarian game', () => {
    cy.get('#searchInput').type('Genshin');
    cy.get('#searchButton').click();
    cy.get('.game-title').should('contain', 'Genshin');
  });
});