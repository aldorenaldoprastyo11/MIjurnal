describe('Automation Testing Website MiJurnal', () => {

    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit('https://cmsdev-mijurnal.hummatech.com/');
        cy.wait(3000);
    });

    // TC-001
    it('TC-001 Membuka Website MiJurnal', () => {

        cy.url().should('include', 'cmsdev-mijurnal');
        cy.contains('MiJurnal').should('be.visible');

    });

    // TC-003
    it('TC-003 Klik Tombol Lihat Selengkapnya', () => {

        cy.get('body').then(($body) => {

            if ($body.text().includes('Lihat Selengkapnya')) {

                cy.contains('Lihat Selengkapnya')
                    .scrollIntoView()
                    .click({ force: true });

            } else {

                cy.log('Tombol Lihat Selengkapnya tidak tersedia');

            }

        });

    });

    // TC-004
    it('TC-004 Klik Tombol Lihat Detail', () => {

        cy.get('body').then(($body) => {

            if ($body.text().includes('Lihat Detail')) {

                cy.contains('Lihat Detail')
                    .scrollIntoView()
                    .click({ force: true });

            } else {

                cy.log('Tombol Lihat Detail tidak tersedia');

            }

        });

    });

    // TC-005
    it('TC-005 Klik Tombol Lihat Aplikasi', () => {

        cy.get('body').then(($body) => {

            if ($body.text().includes('Lihat Aplikasi')) {

                cy.contains('Lihat Aplikasi')
                    .click({ force: true });

            } else {

                cy.log('Tombol Lihat Aplikasi tidak tersedia');

            }

        });

    });

    // TC-006
    it('TC-006 Klik FAQ', () => {

        cy.get('body').then(($body) => {

            if ($body.text().includes('Siapa saja yang bisa menggunakan MiJurnal?')) {

                cy.contains('Siapa saja yang bisa menggunakan MiJurnal?')
                    .scrollIntoView()
                    .click({ force: true });

            } else {

                cy.log('FAQ tidak tersedia');

            }

        });

    });

    // TC-007
    it('TC-007 Klik Tombol Kirim Email', () => {

        cy.get('body').then(($body) => {

            if ($body.text().includes('Kirim Email')) {

                cy.contains('Kirim Email')
                    .scrollIntoView()
                    .click({ force: true });

            } else {

                cy.log('Tombol Kirim Email tidak tersedia');

            }

        });

    });

    // TC-008
    it('TC-008 Menguji Slider', () => {

        cy.get('button').then(($btn) => {

            if ($btn.length > 0) {

                cy.wrap($btn.first())
                    .click({ force: true });

            } else {

                cy.log('Slider tidak tersedia');

            }

        });

    });

    // TC-009
    it('TC-009 Download Aplikasi', () => {

        cy.get('body').then(($body) => {

            if ($body.text().includes('Download')) {

                cy.contains('Download')
                    .click({ force: true });

            } else {

                cy.log('Download tidak tersedia');

            }

        });

    });

    // TC-010
    it('TC-010 Tombol Aksi Cepat', () => {

        cy.scrollTo('bottom');

        cy.get('body').should('be.visible');

        cy.get('body').then(($body) => {

            if ($body.text().includes('AKSI CEPAT')) {

                cy.contains('AKSI CEPAT')
                    .should('be.visible');

            } else {

                cy.log('Section AKSI CEPAT tidak ditemukan');

            }

        });

    });

    // TC-011
    it('TC-011 Platform Media', () => {

        cy.scrollTo('bottom');

        cy.get('body').should('be.visible');

        cy.get('body').then(($body) => {

            if ($body.text().includes('PLATFORM MEDIA')) {

                cy.contains('PLATFORM MEDIA')
                    .should('be.visible');

            } else {

                cy.log('Section PLATFORM MEDIA tidak ditemukan');

            }

        });

    });

});