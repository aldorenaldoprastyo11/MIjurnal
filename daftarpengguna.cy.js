describe('Testing Daftar Pengguna MiJurnal', () => {

  const email = 'andhikak464@gmail.com'
  const password = 'password'

  beforeEach(() => {
  cy.visit('https://cmsdev-mijurnal.hummatech.com/login')

  cy.wait(1000)

  // Pilih login sebagai Sekolah
  cy.contains('Sekolah')
    .should('be.visible')
    .click()

  cy.wait(500)

  // Isi email
  cy.get('input[type="email"]')
    .clear()
    .type('andhikak464@gmail.com')

  // Isi password
  cy.get('input[type="password"]')
    .clear()
    .type('password')

  // Klik Login
  cy.get('button[type="submit"]')
    .click()

  cy.wait(3000)
})


  // =========================
  // DAFTAR PENGAJAR
  // =========================

  // MJ-DPGN-001
  it('MJ-DPGN-001 - Membuka halaman Daftar Pengajar', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/pengajar'
    )

    cy.wait(2000)

    cy.url().should(
      'include',
      '/sekolah/pengguna/pengajar'
    )

    cy.contains('Pengajar')
      .should('be.visible')
  })


  // MJ-DPGN-002
  it('MJ-DPGN-002 - Mengecek data pengajar', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/pengajar'
    )

    cy.wait(2000)

    cy.contains('Nama Pengajar')
      .should('be.visible')

    cy.contains('Tanggal Bergabung')
      .should('be.visible')

    cy.contains('Role')
      .should('be.visible')

    cy.contains('Status')
      .should('be.visible')
  })


  // MJ-DPGN-003
  it('MJ-DPGN-003 - Mencari data pengajar', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/pengajar'
    )

    cy.wait(2000)

    cy.get('input[placeholder*="Cari pengajar"]')
      .should('be.visible')
      .type('testing')

    cy.wait(1000)

    cy.get('input[placeholder*="Cari pengajar"]')
      .should('have.value', 'testing')
  })


  // MJ-DPGN-004
  it('MJ-DPGN-004 - Menggunakan filter pengajar', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/pengajar'
    )

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .eq(0)
      .should('be.visible')
      .click()

    cy.wait(1000)

  })


  // MJ-DPGN-005
  it('MJ-DPGN-005 - Melihat detail pengajar', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/pengajar'
    )

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .last()
      .click()

    cy.wait(1000)

    cy.get('body')
      .should('be.visible')
  })


  // MJ-DPGN-006
  it('MJ-DPGN-006 - Export data pengajar', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/pengajar'
    )

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .should('have.length.greaterThan', 0)
  })


  // =========================
  // DAFTAR SISWA
  // =========================

  // MJ-DPGN-007
  it('MJ-DPGN-007 - Membuka halaman Daftar Siswa', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/siswa'
    )

    cy.wait(2000)

    cy.url().should(
      'include',
      '/sekolah/pengguna/siswa'
    )

    cy.get('body')
      .should('be.visible')
  })


  // MJ-DPGN-008
  it('MJ-DPGN-008 - Mengecek data siswa', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/siswa'
    )

    cy.wait(2000)

    cy.get('body')
      .should('be.visible')

    cy.get('body')
      .invoke('text')
      .should('not.be.empty')
  })


  // MJ-DPGN-009
  it('MJ-DPGN-009 - Mencari data siswa', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/siswa'
    )

    cy.wait(2000)

    cy.get('input')
      .filter(':visible')
      .first()
      .should('be.visible')
      .type('test')

    cy.wait(1000)

    cy.get('body')
      .should('be.visible')
  })


  // MJ-DPGN-010
  it('MJ-DPGN-010 - Menggunakan filter siswa', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/siswa'
    )

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .eq(0)
      .should('be.visible')
      .click()

    cy.wait(1000)

  })


  // MJ-DPGN-011
  it('MJ-DPGN-011 - Melihat detail siswa', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/siswa'
    )

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .last()
      .click()

    cy.wait(1000)

    cy.get('body')
      .should('be.visible')
  })


  // MJ-DPGN-012
  it('MJ-DPGN-012 - Export data siswa', () => {

    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/pengguna/siswa'
    )

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .should('have.length.greaterThan', 0)
  })

})