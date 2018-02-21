const assert = require('assert')
const { expect } = require('chai')
const Account = require('../src/account')

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
  })

  it('should initialize with a balance of zero', () => {
    expect(account.balance).to.equal(0)
  })
})
