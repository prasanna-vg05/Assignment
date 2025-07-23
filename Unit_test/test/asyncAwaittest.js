
const assert = require('chai').assert;
const sinon = require('sinon')

const multiplyFunction= require('../src/promise');

const {calculateProduct} = require('../src/asyncAwait')


describe('Async/Await Tests', ()=>{

  afterEach(()=>{
      sinon.restore()
    })

  it('Should calculate product properly',async()=>{
    sinon.stub(multiplyFunction,'multiplyNumbers').resolves(6)
    const result = await calculateProduct(2,3)
    assert.strictEqual(result,6) 
  })

  it('Should return Error for non-number inputs',async()=>{
    sinon.stub(multiplyFunction,'multiplyNumbers').rejects(new Error('Both arguments must be numbers'));
    try {
      await calculateProduct('a', 3);
      assert.fail('Should have thrown an error'); 
    } catch (err) {
      assert.match(err.message, /number/i); 
      assert.strictEqual(err.message, 'Calculation failed: Both arguments must be numbers');

    }
  })
})