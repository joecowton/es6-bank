const assert = require('assert')
const Account = require('../src/account')

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
  })

  it('should initialize with a balance of zero', () => {
    assert(account.balance === 0 )
  })
})
