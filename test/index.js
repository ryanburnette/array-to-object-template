var mocha = require('mocha')
var describe = mocha.describe
var chai = require('chai')
var expect = chai.expect

var arrayToObjectTemplate = require('../index.js')

describe('arrayToObjectTemplate',function () {
  it('is a function',function () {
    expect(arrayToObjectTemplate).to.be.a('function')
  })

  it('works',function () {
    var from = [ 
      'date',
      { student: [ 'name', 'cert_number' ] },
      { instructor: [ 'name', 'cert_number', 'cert_expiration', { foo: ['a','b'] } ] },
      { aircraft: [ 'make', 'model' ] } 
    ]
    var to = {
      date: null,
      student: {
        name: null,
        cert_number: null
      },
      instructor: {
        name: null,
        cert_number: null,
        cert_expiration_date: null,
        foo: {
          a: null,
          b: null
        }
      },
      aircraft: {
        make: null,
        model: null
      }
    }
    expect(arrayToObjectTemplate(from)).to.eql(to)
  })
})
