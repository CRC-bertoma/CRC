describe('API tests', () => {
    let totalEntries;

    it('Get total visitors', () => {
        cy.request('https://mb-crc-visitors-app.azurewebsites.net/api/GetTotalVisitors')
            .its('body')
            .then((body) => {
                totalEntries = JSON.parse(body).total_entries;
                console.log('Total entries: ' + totalEntries);
            });
    });

    it('Add 10 visitors', () => {
        // wrap the following line in a 10 times for loop
        for (let i = 0; i < 10; i++) {
            cy.request('https://mb-crc-visitors-app.azurewebsites.net/api/AddVisitor')
                .its('status')
                .should('be.equal', 200);
        }
    });

    it('Get total entries from API 2 and verify', () => {
        cy.wait(1000);

        cy.request('https://mb-crc-visitors-app.azurewebsites.net/api/GetTotalVisitors')
            .its('body')
            .should((body) => {
                expect(JSON.parse(body).total_entries).to.eq(totalEntries + 10);
            });
    });
});