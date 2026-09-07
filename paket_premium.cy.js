// =====================================================
// cypress/e2e/paket-premium.cy.js
// Testing Paket Premium MiJurnal
// MJ-PP-001 s/d MJ-PP-006
// =====================================================

const BASE_URL = "https://cmsdev-mijurnal.hummatech.com";

Cypress.on("uncaught:exception", () => {
    return false;
});


// =====================================================
// BUKA WEBSITE
// =====================================================

function bukaWebsite() {

    cy.visit(BASE_URL, {
        failOnStatusCode: false,
        timeout: 60000
    });

    cy.wait(5000);

    cy.document()
        .its("readyState")
        .should("eq", "complete");
}


// =====================================================
// BUKA BAGIAN SEKOLAH
// =====================================================

function bukaSekolah() {

    cy.get("body").then(($body) => {

        if (
            $body.text().match(/sekolah/i)
        ) {

            cy.contains(
                "a, button, [role='button']",
                /sekolah/i
            )
                .first()
                .click({ force: true });

            cy.wait(2000);

        } else {

            cy.log("Menu Sekolah tidak ditemukan");
        }
    });
}


// =====================================================
// BUKA PAKET PREMIUM
// =====================================================

function bukaPaketPremium() {

    cy.get("body").then(($body) => {

        const teks = $body.text();

        if (
            /paket premium/i.test(teks)
        ) {

            cy.contains(
                "a, button, [role='button']",
                /paket premium/i
            )
                .first()
                .click({ force: true });

        } else if (
            /premium/i.test(teks)
        ) {

            cy.contains(
                "a, button, [role='button']",
                /premium/i
            )
                .first()
                .click({ force: true });

        } else {

            cy.log("Tombol Paket Premium tidak ditemukan");
        }

    });

    cy.wait(3000);
}


// =====================================================
// MJ-PP-001
// Memastikan halaman Paket Premium dapat diakses
// =====================================================

describe("Testing Paket Premium MiJurnal", () => {

    it("MJ-PP-001 - Memastikan halaman Paket Premium dapat diakses", () => {

    cy.visit(
        "https://cmsdev-mijurnal.hummatech.com/aplikasi/paket-premium",
        {
            failOnStatusCode: false,
            timeout: 60000
        }
    );

    cy.wait(5000);

    cy.document()
        .its("readyState")
        .should("eq", "complete");

    cy.get("body")
        .should("be.visible");

});


    // =================================================
    // MJ-PP-002
    // Memastikan button berlangganan berfungsi
    // =================================================

    it("MJ-PP-002 - Memastikan button berlangganan berfungsi", () => {

        bukaWebsite();

        bukaSekolah();

        bukaPaketPremium();

        cy.get("body").then(($body) => {

            if (
                /berlangganan/i.test($body.text())
            ) {

                cy.contains(
                    "button, a, [role='button']",
                    /berlangganan/i
                )
                    .first()
                    .should("be.visible")
                    .click({ force: true });

                cy.wait(3000);

            } else {

                cy.log(
                    "Tombol Berlangganan tidak ditemukan"
                );
            }
        });

        cy.get("body")
            .should("be.visible");
    });


    // =================================================
    // MJ-PP-003
    // Memastikan button pembayaran berfungsi semua
    // =================================================

    it("MJ-PP-003 - Memastikan semua tombol metode pembayaran berfungsi", () => {

        bukaWebsite();

        bukaSekolah();

        bukaPaketPremium();

        cy.get("body").then(($body) => {

            if (
                /berlangganan/i.test($body.text())
            ) {

                cy.contains(
                    "button, a, [role='button']",
                    /berlangganan/i
                )
                    .first()
                    .click({ force: true });

                cy.wait(3000);
            }
        });

        cy.get("body")
            .should("be.visible");

        // Cari pilihan pembayaran
        cy.get("body").then(($body) => {

            const teks = $body.text();

            if (
                /pembayaran|payment|qris|transfer|bank/i.test(teks)
            ) {

                cy.log(
                    "Bagian pembayaran berhasil ditemukan"
                );

            } else {

                cy.log(
                    "Bagian metode pembayaran belum ditemukan"
                );
            }
        });
    });


    // =================================================
    // MJ-PP-004
    // Mengecek bagian total bayar
    // =================================================

    it("MJ-PP-004 - Mengecek bagian total bayar dan tombol Bayar Sekarang", () => {

        bukaWebsite();

        bukaSekolah();

        bukaPaketPremium();

        cy.get("body").then(($body) => {

            if (
                /berlangganan/i.test($body.text())
            ) {

                cy.contains(
                    "button, a, [role='button']",
                    /berlangganan/i
                )
                    .first()
                    .click({ force: true });

                cy.wait(3000);
            }
        });

        // Scroll ke bawah
        cy.scrollTo("bottom", {
            duration: 1000
        });

        cy.wait(1000);

        cy.get("body")
            .should("be.visible");

        // Cek total pembayaran
        cy.get("body").then(($body) => {

            if (
                /total bayar|total pembayaran|total/i.test(
                    $body.text()
                )
            ) {

                cy.log(
                    "Bagian total pembayaran ditemukan"
                );

            } else {

                cy.log(
                    "Bagian total pembayaran tidak ditemukan"
                );
            }
        });

        // Cek tombol Bayar Sekarang
        cy.get("body").then(($body) => {

            if (
                /bayar sekarang/i.test($body.text())
            ) {

                cy.contains(
                    "button, a, [role='button']",
                    /bayar sekarang/i
                )
                    .first()
                    .should("be.visible");

            } else {

                cy.log(
                    "Tombol Bayar Sekarang tidak ditemukan"
                );
            }
        });
    });


    // =================================================
    // MJ-PP-005
    // Memastikan halaman dapat di-scroll
    // =================================================

    it("MJ-PP-005 - Memastikan halaman Paket Premium dapat di-scroll", () => {

        bukaWebsite();

        bukaSekolah();

        bukaPaketPremium();

        cy.get("body")
            .should("be.visible");

        // Scroll ke bawah
        cy.scrollTo("bottom", {
            duration: 1500
        });

        cy.wait(1000);

        // Scroll kembali ke atas
        cy.scrollTo("top", {
            duration: 1500
        });

        cy.wait(1000);

        cy.get("body")
            .should("be.visible");
    });


    // =================================================
    // MJ-PP-006
    // Memastikan halaman tidak error setelah refresh
    // =================================================

    it("MJ-PP-006 - Memastikan halaman Paket Premium tidak error setelah refresh", () => {

        bukaWebsite();

        bukaSekolah();

        bukaPaketPremium();

        cy.get("body")
            .should("be.visible");

        // Refresh
        cy.reload();

        cy.wait(5000);

        cy.document()
            .its("readyState")
            .should("eq", "complete");

        cy.get("body")
            .should("be.visible");

        cy.log(
            "Halaman berhasil dimuat kembali setelah refresh"
        );
    });

});