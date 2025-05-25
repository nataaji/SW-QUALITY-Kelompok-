describe('Halaman Login', () => {
  beforeEach(() => {
    cy.visit('/login.html');
  });

  it('Berhasil login dengan input valid', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').type('123456');
    cy.get('form').submit();
    cy.on('window:alert', (str) => {
      expect(str).to.include('Login berhasil');
    });
  });

  it('Gagal login jika field kosong', () => {
    cy.get('form').submit();
    cy.get(':invalid').should('exist');
  });

  it('Navigasi ke halaman register', () => {
    cy.contains('Belum punya akun?').click();
    cy.url().should('include', 'register.html');
  });
});