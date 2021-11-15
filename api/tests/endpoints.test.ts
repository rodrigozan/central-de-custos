import chai from 'chai';
import exp from 'constants';
import req from 'request'

import prismaClient from '../src/prisma/index';

const URL = 'http://localhost:3500'

const expect = chai.expect

describe('Endpoint Users Status', () => {

  it('Add Costs Central', (done) => {
    const costsCentral = prismaClient.costsCentral.create({
      data: {
        nm_costs_central: 'Central Sudoeste',
      }

    })
    req.post(`${URL}/costs-central`, costsCentral, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

  it('Add Department', (done) => {
    const office = prismaClient.department.create({
      data: {
        nm_department: 'Administração',
        costs_central_id: 1
      }

    })
    req.post(`${URL}/departments`, office, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

  it('Add Office', (done) => {
    const office = prismaClient.office.create({
      data: {
        nm_office: 'Administrador',
      }

    })
    req.post(`${URL}/offices`, office, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

  it('Add Users', (done) => {
    const user = prismaClient.user.create({
      data: {
        nm_user: 'Usuário Administrador',
        em_user: 'user_adm@test.com',
        ps_user: '123456oi',
        office_id: 1,
        department_id: 1
      }

    })
    req.post(`${URL}/users`, user, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

  it('Get Users', (done) => {
    req(`${URL}/users`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

})

