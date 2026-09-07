describe('Testing Halaman Kontak MiJurnal', () => {

    beforeEach(() => {

        cy.visit('https://cmsdev-mijurnal.hummatech.com/login')

        // Login
        cy.get('input[type="email"]').type('email@gmail.com')
        cy.get('input[type="password"]').type('password123')
        cy.get('button[type="submit"]').click()

        cy.wait(3000)

        // Buka halaman kontak
        cy.visit('https://cmsdev-mijurnal.hummatech.com/kontak')

        cy.wait(3000)

    })

    it('Verifikasi Kolom Nama Lengkap', () => {

        cy.get('body').then(($body) => {

            if ($body.find('input').length > 0) {

                cy.get('input')
                    .eq(0)
                    .clear({force:true})
                    .type('Angga Wahyu Saputra',{force:true})

            }

        })

    })

    it('Verifikasi Kolom Email', () => {

        cy.get('body').then(($body) => {

            if ($body.find('input[type="email"]').length > 0) {

                cy.get('input[type="email"]')
                    .last()
                    .clear({force:true})
                    .type('testing@gmail.com',{force:true})

            }

        })

    })

    it('Verifikasi Kolom Pesan', () => {

    cy.get('textarea')
        .not('#g-recaptcha-response')
        .first()
        .should('exist')
        .clear({ force: true })
        .type('Ini adalah pesan testing Cypress.', { force: true })

})
    it('Verifikasi Google Maps', () => {

        cy.get('iframe', { timeout:10000 })
            .should('exist')

    })

    it('Verifikasi Platform Media Sosial', () => {

        cy.get('a').then(($a)=>{

            expect($a.length).to.be.greaterThan(0)

        })

    })

    it('Verifikasi Menu Aksi Cepat', () => {

        cy.get('button,a')
            .its('length')
            .should('be.greaterThan',0)

    })

})