describe('Testing Riwayat Transaksi MiJurnal', () => {

  beforeEach(() => {
    cy.visit('https://cmsdev-mijurnal.hummatech.com/login')

    // Login sebagai Sekolah
    cy.contains('Sekolah').click()

    cy.get('input[type="email"]')
      .type('andhikak464@gmail.com')

    cy.get('input[type="password"]')
      .type('password')

    cy.get('button[type="submit"]')
      .click()

    cy.url({ timeout: 10000 })
      .should('not.include', '/login')

    // Buka halaman Riwayat Transaksi
    cy.visit(
      'https://cmsdev-mijurnal.hummatech.com/sekolah/riwayat-transaksi'
    )

    cy.contains('Riwayat Transaksi', { timeout: 10000 })
      .should('be.visible')
  })


  // MJ-RWT-001
  it('MJ-RWT-001 - Membuka halaman Riwayat Transaksi', () => {

    cy.contains('Riwayat Transaksi')
      .should('be.visible')

    cy.url()
      .should('include', '/sekolah/riwayat-transaksi')
  })


  // MJ-RWT-002
  it('MJ-RWT-002 - Mengecek data transaksi', () => {

    cy.get('table')
      .should('be.visible')

    cy.get('tbody tr')
      .should('have.length.greaterThan', 0)
  })


  // MJ-RWT-003
  it('MJ-RWT-003 - Mencari data transaksi', () => {

    cy.get('input')
      .first()
      .should('be.visible')
      .type('Paket Premium')

    cy.wait(1000)

    cy.contains('Paket Premium')
      .should('be.visible')
  })


  // MJ-RWT-004
    // MJ-RWT-004
  it('MJ-RWT-004 - Menggunakan filter transaksi', () => {

    cy.get('input')
      .first()
      .should('be.visible')
      .then(($input) => {

        const inputRect = $input[0].getBoundingClientRect()

        cy.get('button:visible')
          .filter((index, button) => {

            const buttonRect = button.getBoundingClientRect()

            return (
              buttonRect.left > inputRect.right &&
              Math.abs(buttonRect.top - inputRect.top) < 50
            )
          })
          .first()
          .should('be.visible')
          .click()
      })

    cy.wait(500)
  })


  // MJ-RWT-006
  it('MJ-RWT-006 - Mengecek tombol Export Excel', () => {

    cy.get('button, a')
      .filter((index, element) => {

        const text = (
          (element.innerText || '') +
          ' ' +
          (element.getAttribute('aria-label') || '') +
          ' ' +
          (element.getAttribute('title') || '') +
          ' ' +
          (element.getAttribute('data-tooltip') || '')
        ).toLowerCase()

        return (
          text.includes('excel') ||
          text.includes('xlsx')
        )
      })
      .first()
      .should('be.visible')
  })


  // MJ-RWT-007
  it('MJ-RWT-007 - Mengecek tombol Export PDF', () => {

    cy.get('button, a')
      .filter((index, element) => {

        const text = (
          (element.innerText || '') +
          ' ' +
          (element.getAttribute('aria-label') || '') +
          ' ' +
          (element.getAttribute('title') || '') +
          ' ' +
          (element.getAttribute('data-tooltip') || '')
        ).toLowerCase()

        return (
          text.includes('pdf') ||
          text.includes('export pdf')
        )
      })
      .first()
      .should('be.visible')
  })

})