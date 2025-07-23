const assert = require('chai').assert;
const sinon = require('sinon')
const dateTimeUtils = require('../src/dateTime');

describe('Date Time Tests', () => {
  let testDate;
  beforeEach(()=>{ 
    testDate = new Date('2023-01-01');
  })
  
  it('should add days to date correctly', () => {
    let spyAddDays = sinon.spy(dateTimeUtils,'addDaysToDate')
    const result = dateTimeUtils.addDaysToDate(testDate, 5);
    assert.strictEqual(result.getDate(), 6);
    sinon.assert.calledOnce(spyAddDays)
    sinon.assert.calledWith(spyAddDays,testDate,5)

    spyAddDays.restore()
  });

  it('should detect weekend correctly', () => {
    let spyIsWeekend = sinon.spy(dateTimeUtils,'isWeekend')
    assert.strictEqual(dateTimeUtils.isWeekend(new Date('2023-01-07')),true)
    sinon.assert.calledOnce(spyIsWeekend)
    assert.strictEqual(dateTimeUtils.isWeekend(new Date('2023-01-08')), true); 
    sinon.assert.calledTwice(spyIsWeekend)
    assert.strictEqual(dateTimeUtils.isWeekend(new Date('2023-01-09')), false);
    sinon.assert.calledThrice(spyIsWeekend)
    spyIsWeekend.restore()

  });

  it('should format date correctly', () => {
    let spyformatDate = sinon.spy(dateTimeUtils,'formatDate')
    assert.strictEqual(dateTimeUtils.formatDate(testDate), '2023-01-01');
    sinon.assert.calledOnce(spyformatDate)
    assert.strictEqual(dateTimeUtils.formatDate(testDate, 'MM/DD/YYYY'), '01/01/2023');
    sinon.assert.calledTwice(spyformatDate)

    spyformatDate.restore()
  });

  afterEach(() => {
    sinon.restore();
  });

});