
const assert = require('chai').assert

const {multiplyNumbers} = require('../src/promise')


describe("Promise Tests",()=>{
  it("sholud multiply two numbers correctly",()=>{
    return multiplyNumbers(2,3).then(result =>{
      assert.strictEqual(result,6)
    })
  })

  it("Sholud return error for non-number inputs",async ()=>{
    try{
      await multiplyNumbers('a',2)
      assert.fail('Expected promise to be rejected')
    }
    catch(err){
      assert.strictEqual(err.message,'Both arguments must be numbers')
    }
  })
})