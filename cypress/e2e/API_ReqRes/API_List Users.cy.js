describe('List Users', () => {
  it('List Users Page 2', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {
        expect('response.status').to.equal(200)
        expect('response.body').to.not.be.null
      })
  })
})


