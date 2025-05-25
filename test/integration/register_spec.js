describe('Halaman Register', () => {
  beforeEach(() => {
    cy.visit('/register.html');
  });

  it('Berhasil registrasi dengan data valid', () => {
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('123456');
    cy.get('#confirmPassword').type('123456');
    cy.get('form').submit();
    cy.on('window:alert', (str) => {
      expect(str).to.include('berhasil');
    });
  });

  it('Gagal registrasi jika password tidak cocok', () => {
    cy.get('#password').type('123456');
    cy.get('#confirmPassword').type('654321');
    cy.get('form').submit();
    cy.on('window:alert', (str) => {
      expect(str).to.include('Password tidak cocok');
    });
  });

  it('Navigasi ke halaman login', () => {
    cy.contains('Sudah punya akun?').click();
    cy.url().should('include', 'login.html');
  });
});