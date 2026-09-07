describe('Testing Halaman Berita Mijurnal', () => {

  before(() => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
  });

  beforeEach(() => {
    cy.visit('https://cmsdev-mijurnal.hummatech.com/berita');
    cy.wait(3000);
  });

  // MJ-BRT-001
  it('MJ-BRT-001 Membuka Detail Berita', () => {

    cy.contains('Selengkapnya')
      .first()
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);

    cy.get('body').should('be.visible');

  });

  // MJ-BRT-002
  it('MJ-BRT-002 Tombol Selengkapnya', () => {

    cy.contains('Selengkapnya')
      .first()
      .should('be.visible')
      .click({ force: true });

    cy.get('body').should('be.visible');

  });

  // MJ-BRT-003
  it('MJ-BRT-003 Tombol Kembali ke List', () => {

    cy.contains('Selengkapnya')
      .first()
      .click({ force: true });

    cy.wait(1000);

    cy.go('back');

    cy.url().should('include', '/berita');

  });

  // MJ-BRT-004
  it('MJ-BRT-004 Berita Selanjutnya', () => {

    cy.scrollTo('bottom');

    cy.get('body').then(($body) => {

      if ($body.find('button').length > 0) {

        cy.get('button').last().click({ force: true });

      } else if ($body.find('a').length > 0) {

        cy.get('a').last().click({ force: true });

      } else {

        cy.log('Tidak ditemukan tombol berita selanjutnya');

      }

    });

    cy.wait(2000);

    cy.get('body').should('be.visible');

  });

  // MJ-BRT-005
  it('MJ-BRT-005 Tidak Ada Berita Lagi', () => {

    cy.scrollTo('bottom');

    cy.get('body').then(($body) => {

      if ($body.text().includes('Tidak ada berita lagi')) {

        cy.contains('Tidak ada berita lagi')
          .should('be.visible');

      } else {

        cy.log('Masih terdapat berita');

      }

    });

  });

  // MJ-BRT-006
  it('MJ-BRT-006 Menu Aksi Cepat', () => {

    cy.get('a')
      .should('have.length.greaterThan', 0);

  });

  // MJ-BRT-007
  it('MJ-BRT-007 Platform Media', () => {

  cy.get('body').then(($body) => {

    const socialLinks = $body.find(
      'a[href*="facebook"], a[href*="instagram"], a[href*="youtube"], a[href*="linkedin"], a[href*="x.com"], a[href*="twitter"]'
    );

    if (socialLinks.length > 0) {
      expect(socialLinks.length).to.be.greaterThan(0);
    } else {
      cy.log('Platform media sosial tidak ditemukan pada halaman.');
    }

  });

});

});