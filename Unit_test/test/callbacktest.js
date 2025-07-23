

const assert = require('chai').assert;
const {calculateWithCallback} = require('../src/callback');

describe('callback Test',()=>{
    it("should add two numbers coorectly",(done)=>{
        calculateWithCallback(5,6,(err, data)=>{
            assert.strictEqual(data,11);
            assert.isNull(err)
            done();
        })
    })

    it("should return error for non-numbers",(done)=>{
        calculateWithCallback('a',5,(err, data)=>{
            assert.instanceOf(err, Error);
            assert.isUndefined(data);
            done();
        })
    })
})