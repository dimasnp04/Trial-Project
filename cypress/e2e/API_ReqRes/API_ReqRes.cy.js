describe('TS01 API ReqRes', () => {
  it('TC001 Get List Users', () => {
    cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'}
    })
    .then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.property('total_pages', 2)
    expect(response.body.data).to.be.an('array').and.to.have.length.of.at.least(1)
    expect(response.body.data).length.to.be.greaterThan(2)
    expect(response.body).to.not.be.null
    expect(response.body.data[0].email).to.not.be.null
    expect(response.body.data[0].first_name).to.eq('Michael')

    Cypress._.each(response.body.data, (data) => {
            expect(data.email).to.not.be.null
            expect(data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')})
    
    })
  })
  it('TC002 Get List Single User', () => {
    cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users/2',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'}
    })
    .then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.property('support')
    expect(response.body).to.not.be.null
    expect(response.body.data).to.not.be.null
    expect(response.body.data.email).to.not.be.null
    })
  })
  it('TC003 Get List Single User Not Found', () => {
    cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users/23',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    failOnStatusCode: false
    })
    .then((response) => {
    expect(response.status).to.eq(404)
    expect(response.body).to.not.be.null
    })
  })
  it('TC004 Get List <Resource>', () => {
    cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/unknown',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'}
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('per_page', 6)
    expect(response.body.data).to.be.an('array').and.to.have.length.of.at.least(4)
    expect(response.body.data).length.to.be.greaterThan(4)
    expect(response.body).to.not.be.null
    })
  })
  it('TC005 Get Single User <Resource>', () => {
    cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/unknown/2',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'}
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('data')
    expect(response.body).to.not.be.null
    })
  })
  it('TC006 Get Single User <Resource> Not Found', () => {
    cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/unknown/23',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    failOnStatusCode: false
    })
    .then((response) => {
    expect(response.status).to.equal(404)
    expect(response.body).to.not.be.null
    })
  })
  it('TC007 Post Create User', () => {
    cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/users',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    body: {
       "name": "morpheus",
       "job": "leader"
    }
    })
    .then((response) => {
    expect(response.status).to.equal(201)
    expect(response.body).to.have.property('name')
    expect(response.body).to.not.be.null
    })
  })
  it('TC008 Put Update User', () => {
    cy.request({
    method: 'PUT',
    url: 'https://reqres.in/api/users/2',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    body: {
       "name": "morpheus",
       "job": "zion resident"
    }
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('job')
    expect(response.body).to.not.be.null
    })
  })
  it('TC009 Delete User', () => {
    cy.request({
    method: 'DELETE',
    url: 'https://reqres.in/api/users/2',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'}
    })
    .then((response) => {
    expect(response.status).to.equal(204)
    expect(response.body).to.not.be.null
    })
  })
  it('TC010 Post Register User Successful', () => {
    cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/register',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    body: {
       "email": "eve.holt@reqres.in",
       "password": "pistol"
    }
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('token')
    expect(response.body).to.not.be.null
    })
  })
  it('TC011 Post Register User Unsuccesful', () => {
    cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/register',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    body: {
       "email": "sydney@fife"
    },
    failOnStatusCode: false
    })
    .then((response) => {
    expect(response.status).to.equal(400)
    expect(response.body).to.have.property('error')
    expect(response.body).to.not.be.null
    })
  })
  it('TC012 Post Login Successful', () => {
    cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    body: {
       "email": "eve.holt@reqres.in",
       "password": "cityslicka"
    }
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('token')
    expect(response.body).to.not.be.null
    })
  })
  it('TC013 Post Login Unsuccessful', () => {
    cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    body: {
       "email": "peter@klaven"
    },
    failOnStatusCode: false
    })
    .then((response) => {
    expect(response.status).to.equal(400)
    expect(response.body).to.have.property('error')
    expect(response.body).to.not.be.null
    })
  })
  it('TC014 Get Delayed Response', () => {
    cy.request({
    method: 'Get',
    url: 'https://reqres.in/api/users?delay=3',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'}
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('data')
    expect(response.body).to.not.be.null
    })
  })
  it('TC015 Patch Update User', () => {
    cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/users/2',
    headers: {'x-api-key':'reqres_7836cc189e5145b285a0bf47d860fc37'},
    body: {
      "name": "morpheus",
      "job": "zion resident"
    }
    })
    .then((response) => {
    expect(response.status).to.equal(201)
    expect(response.body).to.have.property('name')
    expect(response.body).to.not.be.null
    })
  .its('status').should('equal', 201)
  })
})