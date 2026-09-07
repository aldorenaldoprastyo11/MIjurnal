describe('Testing Halaman Tentang Kami - Mijurnal', () => {

  beforeEach(() => {
    cy.visit('https://cmsdev-mijurnal.hummatech.com/tentang-kami');
    cy.viewport(1366, 768);
  });

  // TK-001
  it('Membuka halaman Tentang Kami', () => {
    cy.url().should('include', '/tentang-kami');
    cy.contains('Tentang Kami').should('be.visible');
  });

  // TK-002
  it('Memastikan seluruh informasi pada halaman ditampilkan', () => {

    cy.scrollTo('bottom');

    cy.contains('Tentang Kami').should('exist');

    // Tambahkan text lain yang memang ada di halaman
    // Contoh:
    // cy.contains('Visi').should('be.visible');
    // cy.contains('Misi').should('be.visible');
  });

  // TK-003
  it('Memastikan seluruh gambar tampil', () => {

    cy.get('img:visible')
      .should('have.length.greaterThan', 0)
      .each(($img) => {

          cy.wrap($img)
            .should('be.visible')
            .and(($image) => {

                expect($image[0].naturalWidth).to.be.greaterThan(0);

            });

      });

});

  // TK-004
  it('TK-004 - Memastikan tombol Google Play berfungsi', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/tentang-kami');

    cy.wait(3000);

    cy.get('a[href*="play.google"]', { timeout: 10000 })
        .scrollIntoView()
        .should('exist')
        .invoke('removeAttr', 'target')
        .click({ force: true });

    cy.url().should('include', 'play.google');

});

  // TK-005
  it('TK-005 - Memastikan menu Aksi Cepat berfungsi', () => {

  cy.visit('https://cmsdev-mijurnal.hummatech.com/tentang-kami');
  cy.viewport(1366, 768);

  cy.wait(5000);

  cy.contains('a', 'Beranda').should('be.visible');
  cy.contains('a', 'Aplikasi').should('be.visible');
  cy.contains('a', 'Berita').should('be.visible');
  cy.contains('a', 'Tentang Kami').should('be.visible');
  cy.contains('a', 'Kontak').should('be.visible');

});

  // TK-006
 it('Lihat semua link', () => {

  cy.visit('https://cmsdev-mijurnal.hummatech.com/tentang-kami');

  cy.wait(5000);

  cy.get('a').then(($a) => {

    $a.each((i, el) => {
      cy.log(el.innerText);
    });

  });

});

  });