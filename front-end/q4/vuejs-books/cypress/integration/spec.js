// Main Page
describe('vuejs-books main page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('loads', () => {
        cy.contains('h1', 'Top Books of All Time');
    });

    it('loads book items', () => {
        cy.get('.book').should('have.length', 10);
    });

    it('checks that synopsis are less or equal to 200 characters', () => {
        cy.get('.card-text').each($el => {
            expect($el.text()).to.have.length.of.at.most(200);
        });
    });

    it('displays "Upvote" for In Search of Lost Time', () => {
        cy.contains('.book', 'In Search of Lost Time')
            .find('.upvote')
            .should('contain', 'Upvote');
    });

    it('displays "Upvoted" for Don Quixote', () => {
        cy.contains('.book', 'Don Quixote')
            .find('.upvote')
            .should('contain', 'Upvoted');
    });

    it('displays details and goes back', () => {
        cy.contains('.book', '1. In Search of Lost Time')
            .find('h2 > a')
            .first()
            .click();
        cy.url().should('contain', '/book/in-search-of-lost-time');
        cy.contains('h1', 'In Search of Lost Time');
        cy.go('back');
        cy.url().should('contain', '/');
    });
});
// Search function
describe('vuejs-books search function', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display only Don Quixote', () => {
        cy.get('.search-wrapper > input').type('Don Quixote');
        cy.get('.book').should('have.length', 1);
        cy.contains('.book h2', 'Don Quixote');
    });

    it('should display 3 books that start with "The"', () => {
        cy.get('.search-wrapper > input').type('The');
        cy.get('.book').should('have.length', 3);
        cy.contains('.book h2', '1. The Great Gatsby');
        cy.contains('.book h2', '2. The Odyssey');
        cy.contains('.book h2', '3. The Divine Comedy');
    });

    it('deleting input should display 10 books', () => {
        cy.get('.search-wrapper > input').clear();
        cy.get('.book').should('have.length', 10);
    });

    it('should display no book for "Puppies"', () => {
        cy.get('.search-wrapper > input').type('Puppies');
        cy.get('.book').should('have.length', 0);
    });
});

// Details page
describe('vuejs-books details page', () => {
    beforeEach(() => {
        cy.visit('/book/in-search-of-lost-time');
    });
    it('loads', () => {
        cy.contains('h1', 'In Search of Lost Time');
    });

    it('has a synopsis with two paragraphs', () => {
        cy.get('.synopsis > p').should('have.length', 2);
    });
});

// Error page
describe('vuejs-books error page for wrong book', () => {
    it('shows error for non existing page', () => {
        cy.visit('/book/no-book');
        cy.contains('.error', 'Book not found!');
    });
});
