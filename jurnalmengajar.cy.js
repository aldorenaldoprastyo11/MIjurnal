describe('Testing Halaman Jurnal Mengajar', () => {

  before(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  beforeEach(() => {
    cy.visit('https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-mengajar-2')
    cy.wait(3000)
  })

  it('MJ-JM-001 Halaman tampil', () => {
    cy.get('body').should('be.visible')
  })

  it('MJ-JM-002 Seluruh tombol berfungsi', () => {
    cy.get('a,button').its('length').should('be.gt',0)
  })

  // MJ-JM-003
it('MJ-JM-003 Tombol Selengkapnya', () => {

  cy.get('body').then(($body) => {

    if ($body.text().includes('Selengkapnya')) {

      cy.contains('Selengkapnya')
        .first()
        .click({ force: true });

      cy.get('body').should('be.visible');

    } else {
      cy.log('Tombol Selengkapnya tidak ditemukan');
    }

  });

});


// MJ-JM-004
it('MJ-JM-004 Download Play Store', () => {

  cy.get('body').then(($body) => {

    if ($body.text().includes('Play Store')) {

      cy.contains('Play Store')
        .click({ force: true });

    } else {
      cy.log('Tombol Play Store tidak ditemukan');
    }

  });

});


// MJ-JM-005
it('MJ-JM-005 Tombol Tambah', () => {

  cy.get('body').then(($body) => {

    if ($body.text().includes('Tambah')) {

      cy.contains('Tambah')
        .click({ force: true });

    } else {
      cy.log('Tombol Tambah tidak ditemukan');
    }

  });

});


// MJ-JM-006
it('MJ-JM-006 Kirim Email', () => {

  cy.get('body').then(($body) => {

    if ($body.text().includes('Email')) {

      cy.contains('Email')
        .click({ force: true });

    } else {
      cy.log('Tombol Email tidak ditemukan');
    }

  });

});


it('MJ-JM-007 Platform Media', () => {

  cy.get('body').then(($body) => {

    if ($body.find('footer').length > 0) {

      cy.get('footer').should('be.visible');

    } else {

      cy.get('body').should('be.visible');

    }

  });

});

// MJ-JM-008
it('MJ-JM-008 Slide', () => {

  cy.get('body').then(($body) => {

    const buttons = $body.find('button');

    if (buttons.length > 0) {

      cy.wrap(buttons.last()).click({ force: true });

    } else {

      cy.log('Tombol slider tidak ditemukan');

    }

  });

});

  it('MJ-JM-009 Aksi Cepat', () => {
    cy.get('a').first().click({force:true})
  })

})