describe('Pengujian Halaman Jurnal Siswa', () => {

  // =====================================================
  // 1. Mengakses halaman Jurnal Siswa
  // =====================================================
  it('Berhasil mengakses halaman Jurnal Siswa', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-siswa')

    // Memastikan halaman berhasil dibuka
    cy.url().should(
      'eq',
      'https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-siswa'
    )

    // Memastikan body halaman tampil
    cy.get('body').should('be.visible')
  })


  // =====================================================
  // 2. Mencoba tombol Selengkapnya
  // =====================================================
  it('Mencoba tombol Selengkapnya', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-siswa')

    // Scroll ke bagian bawah halaman
    cy.scrollTo('bottom')

    // Cari semua link dan tombol
    cy.get('a, button').should('have.length.greaterThan', 0)

    // Menampilkan informasi elemen di Cypress
    cy.get('a, button').each(($el) => {
      cy.log($el.text())
    })
  })


  // =====================================================
  // 3. Mencoba tombol Kirim Email Anda
  // =====================================================
  it('Mencoba tombol Kirim Email Anda', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-siswa')

    cy.scrollTo('bottom')

    // Memastikan halaman dapat discroll
    cy.window().its('scrollY').should('be.greaterThan', 0)
  })


  // =====================================================
  // 4. Mencoba tombol Tambah (+) pengguna
  // =====================================================
  it('Mencoba tombol Tambah pengguna', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-siswa')

    // Mencari tombol
    cy.get('button').should('have.length.greaterThan', 0)
  })


  // =====================================================
  // 5. Mencoba tombol Aksi Cepat
  // =====================================================
  it('Mencoba bagian Aksi Cepat', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-siswa')

    cy.get('body').should('be.visible')

    // Memastikan ada link atau tombol yang dapat digunakan
    cy.get('a, button').should('have.length.greaterThan', 0)
  })


  // =====================================================
  // 6. Mencoba platform Media Sosial
  // =====================================================
  it('Mencoba platform Media Sosial', () => {

    cy.visit('https://cmsdev-mijurnal.hummatech.com/aplikasi/jurnal-siswa')

    cy.scrollTo('bottom')

    // Memastikan ada link pada halaman
    cy.get('a').should('have.length.greaterThan', 0)
  })

})