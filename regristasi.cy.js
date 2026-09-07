describe('Testing Halaman Register MiJurnal', () => {

  beforeEach(() => {
    cy.visit('https://cmsdev-mijurnal.hummatech.com/register')
  })

  // MJ-REGISTRASI-01
  it('Registrasi dengan data valid', () => {

    cy.get('input[placeholder="Nama lengkap"]')
      .type('Andhika Wahyu')

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .type('081234567890')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .first()
      .type('password')

    cy.get('input[type="password"]')
      .last()
      .type('password')

    cy.contains('button', 'REGISTER')
      .click()

    cy.wait(3000)
  })


  // MJ-REGISTRASI-02
  it('Validasi nama kosong', () => {

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .type('081234567890')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .first()
      .type('password')

    cy.get('input[type="password"]')
      .last()
      .type('password')

    cy.contains('button', 'REGISTER')
      .click()

    cy.get('input[placeholder="Nama lengkap"]')
      .should('have.attr', 'required')
  })


  // MJ-REGISTRASI-03
  it('Validasi nomor HP kosong', () => {

    cy.get('input[placeholder="Nama lengkap"]')
      .type('Andhika Wahyu')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .first()
      .type('password')

    cy.get('input[type="password"]')
      .last()
      .type('password')

    cy.contains('button', 'REGISTER')
      .click()

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .should('have.attr', 'required')
  })


  // MJ-REGISTRASI-04
  it('Validasi email kosong', () => {

    cy.get('input[placeholder="Nama lengkap"]')
      .type('Andhika Wahyu')

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .type('081234567890')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="password"]')
      .first()
      .type('password')

    cy.get('input[type="password"]')
      .last()
      .type('password')

    cy.contains('button', 'REGISTER')
      .click()

    cy.get('input[type="email"]')
      .should('have.attr', 'required')
  })


  // MJ-REGISTRASI-05
  it('Validasi format email tidak valid', () => {

    cy.get('input[placeholder="Nama lengkap"]')
      .type('Andhika Wahyu')

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .type('081234567890')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="email"]')
      .type('andhikak464gmail.com')

    cy.get('input[type="password"]')
      .first()
      .type('password')

    cy.get('input[type="password"]')
      .last()
      .type('password')

    cy.contains('button', 'REGISTER')
      .click()

    cy.get('input[type="email"]')
      .should('not.have.value', '')
  })


  // MJ-REGISTRASI-06
  it('Validasi password kosong', () => {

    cy.get('input[placeholder="Nama lengkap"]')
      .type('Andhika Wahyu')

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .type('081234567890')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .last()
      .type('password')

    cy.contains('button', 'REGISTER')
      .click()

    cy.get('input[type="password"]')
      .first()
      .should('have.attr', 'required')
  })


  // MJ-REGISTRASI-07
  it('Validasi password dan konfirmasi password berbeda', () => {

    cy.get('input[placeholder="Nama lengkap"]')
      .type('Andhika Wahyu')

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .type('081234567890')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .first()
      .type('password')

    cy.get('input[type="password"]')
      .last()
      .type('password123')

    cy.contains('button', 'REGISTER')
      .click()

    cy.wait(1000)
  })


  // MJ-REGISTRASI-08
  it('Registrasi menggunakan email yang sudah terdaftar', () => {

    cy.get('input[placeholder="Nama lengkap"]')
      .type('Andhika Wahyu')

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .type('081234567890')

    cy.get('select')
      .select('Laki-laki')

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .first()
      .type('password')

    cy.get('input[type="password"]')
      .last()
      .type('password')

    cy.contains('button', 'REGISTER')
      .click()

    cy.wait(2000)
  })


  // MJ-REGISTRASI-09
  it('Validasi semua field kosong', () => {

    cy.contains('button', 'REGISTER')
      .click()

    cy.get('input[placeholder="Nama lengkap"]')
      .should('have.attr', 'required')

    cy.get('input[placeholder="08xxxxxxxxxx"]')
      .should('have.attr', 'required')

    cy.get('input[type="email"]')
      .should('have.attr', 'required')
  })

})