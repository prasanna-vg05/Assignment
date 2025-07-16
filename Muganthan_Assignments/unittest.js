const Source = require("./source")

const assert = require("chai").assert;

const sinon = require("sinon")

const SUCCESS = 1;
const ERR_INVALID = 0;
const ERR_ALREADYFILLED = 2;
const ERR_DRAINEDFULLY = 3

describe("Water bottle unit testing", ()=>{
    let instance;
    beforeEach(()=>{
        instance = new Source(1000,24,"steel")
    })

    it("should correctly initialize bottle properties", ()=>{
        assert.equal(instance.getCapacity(),1000)
        assert.equal(instance.getTemperature(),24)
        assert.equal(instance.getMaterial(),'steel')
    })

    describe("Filling method usecases", ()=>{

        let fillSpy;
        beforeEach(()=>{
            fillSpy = sinon.spy(instance,"fill")

        })

        it("should return SUCCESS (1) when filling with valid amount",()=>{
            let status = instance.fill(1000)
            sinon.assert.calledOnce(fillSpy)
            sinon.assert.calledWith(fillSpy,1000)
            assert.equal(instance.currentVolume,1000)
            assert.equal(status,SUCCESS)
        })
        
        it("should return ERROR_ALREADYFILLED (2) when trying to overfill", ()=>{

            instance.fill(1000)
            
            let status1 = instance.fill(1000)
            sinon.assert.calledTwice(fillSpy)
            sinon.assert.calledWith(fillSpy,1000)
            assert.equal(instance.currentVolume,1000)
            assert.equal(status1,ERR_ALREADYFILLED)
        })
        it("should return ERROR_INVAID (0) when trying to fill with negative value", ()=>{

            let status2 = instance.fill(-1000)
            sinon.assert.calledOnce(fillSpy)
            sinon.assert.calledWith(fillSpy,-1000)
            assert.equal(instance.currentVolume,0)
            assert.equal(status2,ERR_INVALID)

        })


        it("should fill only upto the capacity when partial fill then overfilling",()=>{
            instance.fill(500)
            const status = instance.fill(700)
            assert.equal(instance.currentVolume,1000)
            assert.equal(status,ERR_ALREADYFILLED)
        })

        it("should correctly fill multiple small filling",()=>{
            assert.equal(instance.fill(200), SUCCESS);
            assert.equal(instance.fill(200), SUCCESS);
            assert.equal(instance.fill(200), SUCCESS);
            assert.equal(instance.fill(200), SUCCESS);
            assert.equal(instance.fill(200), SUCCESS);
            assert.equal(instance.currentVolume,1000)
        })

        it("should not fill when capacity is 0",()=>{
            instance.setCapacity(0)
            let status = instance.fill(100)
            assert.equal(status,0)
            assert.equal(instance.currentVolume,ERR_INVALID)
        })

        afterEach(() => {
            fillSpy.restore();
        });
    
    })

    describe("Draining method usecases", ()=>{
        let drainSpy;

        beforeEach(()=>{
            drainSpy = sinon.spy(instance,"drain")
        })
        
        it("should return SUCCESS (1) when draining with valid amount", ()=>{
            instance.fill(1000)
            let status = instance.drain(900)
            sinon.assert.calledOnce(drainSpy)
            sinon.assert.calledWith(drainSpy,900)
            assert.equal(instance.currentVolume,100)
            assert.equal(status,SUCCESS)


        })

        it("should return ERROR_ALREADYDRAINED (3) when draining entire volume", ()=>{

            instance.fill(1000)
            instance.drain(1000)
            let status1 = instance.drain(1000)
            assert.equal(instance.currentVolume,0)
            assert.equal(status1,ERR_DRAINEDFULLY)

        })

        it("should return ERROR_INVALID (0) when draining with negative value", ()=>{

            let status2 = instance.drain(-1000)
            sinon.assert.calledOnce(drainSpy)
            sinon.assert.calledWith(drainSpy,-1000)
            assert.equal(instance.currentVolume,0)
            assert.equal(status2,ERR_INVALID)

        })

        it("should correctly drain multiple small draining",()=>{

            instance.setCapacity(1200)
            instance.fill(1200)
            assert.equal(instance.drain(200),SUCCESS)
            assert.equal(instance.drain(200),SUCCESS)
            assert.equal(instance.drain(200),SUCCESS)
            assert.equal(instance.drain(200),SUCCESS)
            assert.equal(instance.drain(200),SUCCESS)
            assert.equal(instance.currentVolume,200)
        })

        it("should not drain when capacity is 0",()=>{
            instance.setCapacity(0)
            let status = instance.drain(100)
            assert.equal(status,ERR_INVALID)
            assert.equal(instance.currentVolume,0)
        })

        afterEach(()=>{
            drainSpy.restore()
        })

    })

})
    