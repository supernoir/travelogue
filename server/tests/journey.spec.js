const expect = require('chai').expect;
const Journey = require('../Journey/index');

let sampleJourney = new Journey(
  'Alaska',
  'A Permafrost Vacation',
  '2012-2016',
  [{ name: 'Vancouver' }, { name: 'Anchorage' }]
);

describe('Journey Class', () => {
  describe('JourneyName', () => {
    it('should be of type string', () => {
      expect(sampleJourney.getJourneyName()).to.be.a('String');
    });
  });
});
