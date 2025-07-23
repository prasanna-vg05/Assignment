
const assert = require('chai').assert;
const {delayedUpperCase} = require("../src/callbackTimeout")

describe("Timeout Callback Tests",()=>{
  it("should convert the string to uppercase after timeout",(done)=>{
    delayedUpperCase('a',1000,(err, data)=>{
      assert.strictEqual(data,'A')
      assert.isNull(err)
      done();
    })
  })

  it("should return error if non-string input",(done)=>{
    delayedUpperCase(1,1000,(err, data)=>{
      assert.instanceOf(err, Error)
      assert.isUndefined(data)
      done()
    })
  })

   it("should return error if string input is 0",(done)=>{
    delayedUpperCase('',1000,(err, data)=>{
      assert.instanceOf(err, Error)
      assert.isUndefined(data)
      done()
    })
  })
})