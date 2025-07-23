
const assert = require('chai').assert
const sinon = require('sinon')
const {shipPackage, delivery} = require('../src/eventEmitter')


describe('Event emitter Tests',()=>{

  let consoleStub;

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleStub.restore();
    delivery.removeAllListeners();
  });


  it('should emit packageShipped with correct ID',(done)=>{
    delivery.once('packageShipped',(id)=>{
    try{
      assert.strictEqual(id,'01')
      sinon.assert.calledWith(consoleStub.firstCall, 'Preparing package 01...')
      sinon.assert.calledWith(consoleStub.secondCall, 'Package 01 has been shipped!')
      done();
      } 
      catch (error) {done(error)

      }
    })


    shipPackage('01')
  })


  it('should NOT emit if package ID is missing',(done)=>{
    let shipped = false;
    delivery.once('packageShipped',()=>{
      shipped = true
    })

    shipPackage(undefined)

    setTimeout(()=>{
      assert.strictEqual(shipped,true)
      done()
    },500)

  })


  it('should handle multiple packages without clashing',(done)=>{
    let list = []

    delivery.on('packageShipped',(id)=>{
      list.push(id)
      if(list.length === 3){
        assert.deepEqual(list,['p1','p2','p3'])
        done()
      }      
    })


    shipPackage('p1')
    shipPackage('p2')
    shipPackage('p3')
  })




  it('should eventually emit "packageDelivered"', function (done) {

    delivery.once('packageDelivered', (id) => {
      assert.strictEqual(id, '01');
      done();
    });

    shipPackage('01');
  });
})