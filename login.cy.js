Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Automation Testing Login MiJurnal', () => {

    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit('https://cmsdev-mijurnal.hummatech.com/login');
        cy.wait(2000);
    });

    // TC-001
    it('TC-001 Memastikan halaman login tampil', () => {
        cy.url().should('include', '/login');
        cy.contains('LOGIN').should('be.visible');
    });

    // TC-002
    it('TC-002 Memastikan tombol Admin berfungsi', () => {
        cy.contains('Admin').should('be.visible').click();
        cy.contains('Admin').should('be.visible');
    });

    // TC-003
    it('TC-003 Memastikan tombol Sekolah berfungsi', () => {
        cy.contains('Sekolah').should('be.visible').click();
        cy.contains('Sekolah').should('be.visible');
    });

    // TC-004
    it('TC-004 Memastikan fitur Ingat Saya berfungsi', () => {
        cy.contains('Ingat Saya').click();
    });

    // TC-005
    it('TC-005 Memastikan fitur tampilkan password', () => {

        cy.get('input[type="password"]')
            .should('exist')
            .type('123456');

        cy.get('button')
            .find('svg')
            .first()
            .click();

    });

    // TC-006
    it('TC-006 Validasi email tidak valid', () => {

        cy.get('input').first().type('abc');

        cy.get('input[type="password"]')
            .type('123456');

        cy.contains('LOGIN').click();

    });

    // TC-007
    it('TC-007 Validasi password salah', () => {

        cy.get('input').first().type('admin@gmail.com');

        cy.get('input[type="password"]')
            .type('salah123');

        cy.contains('LOGIN').click();

    });

});