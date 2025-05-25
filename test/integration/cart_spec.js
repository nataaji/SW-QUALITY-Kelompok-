describe('Halaman Cart', () => {
  beforeEach(() => {
    cy.visit('/cart.html');
  });

  it('Validasi form jika user ID kosong', () => {
    cy.get('form').submit();
    cy.get(':invalid').should('exist');
  });

  it('Pilih metode pembayaran dan cek harga', () => {
    cy.get('input[value="gopay"]').check();
    cy.get('#total').should('not.have.text', '0');
  });

  it('Submit tanpa pilih metode pembayaran', () => {
    cy.get('#userId').type('12345');
    cy.get('form').submit();
    cy.on('window:alert', (str) => {
      expect(str).to.include('metode pembayaran');
    });
  });
});