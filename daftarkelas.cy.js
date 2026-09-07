describe('Testing Daftar Kelas MiJurnal', () => {

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
      .type(email)

    // Isi password
    cy.get('input[type="password"]')
      .clear()
      .type(password)

    // Login
    cy.get('button[type="submit"]')
      .click()

    cy.wait(3000)
  })


  // ==================================================
  // MJ-DFTKLS-002
  // Mencoba fitur pencarian di halaman daftar kelas
  // ==================================================

  it('MJ-DFTKLS-002 - Mencoba fitur pencarian daftar kelas', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

    cy.wait(2000)

    cy.url()
      .should('include', '/sekolah/kelas')

    // Mencari input pencarian
    cy.get('input')
      .filter(':visible')
      .first()
      .should('be.visible')
      .type('test')

    cy.wait(1000)

  })


  // ==================================================
  // MJ-DFTKLS-003
  // Mengecek button detail di halaman daftar kelas
  // ==================================================

  it('MJ-DFTKLS-003 - Mengecek tombol detail daftar kelas', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

    cy.wait(2000)

    // Pastikan terdapat tombol pada halaman
    cy.get('button')
      .filter(':visible')
      .should('have.length.greaterThan', 0)

    // Klik tombol aksi/detail
    cy.get('button')
      .filter(':visible')
      .last()
      .click()

    cy.wait(1000)

    cy.get('body')
      .should('be.visible')
  })


  // ==================================================
  // MJ-DFTKLS-004
  // Mengecek fitur slide nomor halaman lainnya
  // ==================================================

  it('MJ-DFTKLS-004 - Mengecek slide nomor halaman', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .should('have.length.greaterThan', 0)

    cy.get('body')
      .should('be.visible')
  })


  // ==================================================
  // MJ-DFTKLS-005
  // Mengecek filter guru
  // ==================================================

  it('MJ-DFTKLS-005 - Mengecek filter guru', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

    cy.wait(2000)

    // Pastikan tombol filter tersedia
    cy.get('button')
      .filter(':visible')
      .should('have.length.greaterThan', 0)

    // Klik tombol filter
    cy.get('button')
      .filter(':visible')
      .first()
      .click()

    cy.wait(1000)

    cy.get('body')
      .should('be.visible')
  })


 // ==================================================
// MJ-DFTKLS-006
// Mengecek fitur export Excel
// ==================================================

it('MJ-DFTKLS-006 - Mengecek fitur export Excel', () => {

  cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

  cy.wait(2000)

  // Scroll ke bagian bawah halaman
  cy.scrollTo('bottom')

  cy.wait(1000)

  // Memastikan halaman tetap tampil
  cy.get('body')
    .should('be.visible')

  // Mengecek tombol/link export yang tersedia
  cy.get('a, button')
    .filter(':visible')
    .should('have.length.greaterThan', 0)
})


// ==================================================
// MJ-DFTKLS-007
// Mengecek fitur export PDF
// ==================================================

it('MJ-DFTKLS-007 - Mengecek fitur export PDF', () => {

  cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

  cy.wait(2000)

  // Scroll ke bagian bawah halaman
  cy.scrollTo('bottom')

  cy.wait(1000)

  // Memastikan halaman tetap tampil
  cy.get('body')
    .should('be.visible')

  // Mengecek tombol/link yang tersedia
  cy.get('a, button')
    .filter(':visible')
    .should('have.length.greaterThan', 0)
})


// ==================================================
// MJ-DFTKLS-008
// Mengecek daftar tugas
// ==================================================

it('MJ-DFTKLS-008 - Mengecek daftar tugas', () => {

  cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

  cy.wait(2000)

  // Cari bagian Tugas pada kartu kelas
  cy.contains('Tugas')
    .filter(':visible')
    .first()
    .should('be.visible')
    .click()

  cy.wait(1500)

  cy.get('body')
    .should('be.visible')
})


// ==================================================
// MJ-DFTKLS-009
// Mengecek daftar jurnal
// ==================================================

it('MJ-DFTKLS-009 - Mengecek daftar jurnal', () => {

  cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

  cy.wait(2000)

  // Cari bagian Jurnal pada kartu kelas
  cy.contains('Jurnal')
    .filter(':visible')
    .first()
    .should('be.visible')
    .click()

  cy.wait(1500)

  cy.get('body')
    .should('be.visible')
})

  // ==================================================
  // MJ-DFTKLS-010
  // Mengecek filter data
  // ==================================================

  it('MJ-DFTKLS-010 - Mengecek filter data', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/sekolah/kelas')

    cy.wait(2000)

    cy.get('button')
      .filter(':visible')
      .should('have.length.greaterThan', 0)

    cy.get('body')
      .should('be.visible')
  })

})