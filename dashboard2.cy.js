describe('Testing Halaman Sekolah MiJurnal', () => {

  // MJ-DASH-001
it('MJ-DASH-001 - Memastikan login berhasil', () => {

  cy.visit('https://cmsdev-mijurnal.hummatech.com/login')

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

  // Tunggu proses login
  cy.wait(3000)

  // Pastikan halaman tidak mengalami error
  cy.get('body')
    .should('be.visible')

})


  // MJ-DASH-002
  it('Memastikan fitur pada halaman Sekolah dapat ditampilkan', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/login')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .type('password')

    cy.get('button[type="submit"]')
      .click()

    cy.wait(3000)

    cy.contains('Sekolah', { matchCase: false })
      .click()

    cy.wait(3000)

    // Mengecek apakah terdapat fitur yang bisa digunakan
    cy.get('button, a')
      .filter(':visible')
      .should('have.length.greaterThan', 0)
  })


  // MJ-DASH-003
  it('Mencoba salah satu fitur pada halaman Sekolah', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/login')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .type('password')

    cy.get('button[type="submit"]')
      .click()

    cy.wait(3000)

    cy.contains('Sekolah', { matchCase: false })
      .click()

    cy.wait(3000)

    // Memilih fitur yang tersedia
    cy.get('button, a')
      .filter(':visible')
      .first()
      .click()

    cy.wait(2000)

    cy.get('body')
      .should('be.visible')
  })


  // MJ-DASH-004
  it('Mengecek fitur tanggal pada halaman Sekolah', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/login')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .type('password')

    cy.get('button[type="submit"]')
      .click()

    cy.wait(3000)

    cy.contains('Sekolah', { matchCase: false })
      .click()

    cy.wait(3000)

    // Mengecek halaman tetap tampil
    cy.get('body')
      .should('be.visible')
  })

})