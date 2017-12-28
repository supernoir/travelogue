const expect = require('chai').expect;
const Journey = require('../Journey/index');

let sampleJourney = new Journey(
  'Alaska',
  'A Permafrost Vacation',
  [{ start: 2012 }, { end: 2016 }],
  [{ name: 'Vancouver' }, { name: 'Anchorage' }]
);

describe('Journey Class', () => {
  describe('JourneyName', () => {
    it('should be of type string', () => {
      expect(sampleJourney.getJourneyName()).to.be.a('String');
    });
  });
  describe('JourneyDesc', () => {
    it('should be of type string', () => {
      expect(sampleJourney.getJourneyDesc()).to.be.a('String');
    });
  });
  describe('JourneyDateRange', () => {
    it('should be of type array', () => {
      expect(sampleJourney.getJourneyDateRange()).to.be.a('Array');
    });
    it('should be an array of two items', () => {
      expect(sampleJourney.getJourneyDateRange().length).to.equal(2);
    });
    it('should have a first item called start', () => {
      expect(sampleJourney.getJourneyDateRange()[0]).to.have.key('start');
    });
    it('should have a second item called end', () => {
      expect(sampleJourney.getJourneyDateRange()[1]).to.have.key('end');
    });
  });
  describe('JourneyMilestones', () => {
    it('should be of type array', () => {
      expect(sampleJourney.getJourneyMilestones()).to.be.a('Array');
    });
  });
});
