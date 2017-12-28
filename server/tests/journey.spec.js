const expect = require('chai').expect;
const Journey = require('../Journey/index');

let sampleJourney = new Journey(
  'Alaska',
  'A Permafrost Vacation',
  [{ start: 2012 }, { end: 2016 }],
  [{ name: 'Vancouver' }, { name: 'Anchorage' }]
);

sampleJourney.addMilestoneToJourney({ name: 'Berlin' });
console.log(sampleJourney.getJourneyMilestones());

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
    describe('Add initial Start Date', () => {
      it('should add a new date if there is none');
      it('should not change if a date exists');
      it('should only change the first item in the array');
      it('should be a valid Date format');
    });
    describe('Add an End Date', () => {
      it('should add a new date if there is none');
      it('should not change if a date exists');
      it('should only change the last item in the array');
      it('should be a valid Date format');
    });
  });
  describe('JourneyMilestones', () => {
    it('should be of type array', () => {
      expect(sampleJourney.getJourneyMilestones()).to.be.a('Array');
    });
  });
  describe('Add New Milestone to Journey', () => {
    it('should change the Milestones array length by 1', () => {
      let previousLength = sampleJourney.getJourneyMilestones().length;
      let newMilestone = { name: 'Fairbanks' };
      sampleJourney.addMilestoneToJourney(newMilestone);
      expect(sampleJourney.getJourneyMilestones().length).to.equal(
        previousLength + 1
      );
    });
  });
});
