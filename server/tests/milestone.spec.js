const expect = require('chai').expect;
const Milestone = require('../Milestone/index');

let sampleMilestone = new Milestone(
  'Vancouver',
  'Alaska',
  'February 21, 2012',
  'An afternoon in a beautiful city by the sea',
  ['John', 'Paul', 'George', 'Ringo'],
  '49°15′N 123°6′W'
);

describe('Milestone Class', () => {
  describe('MilestoneName', () => {
    it('should be of type string', () => {
      expect(sampleMilestone.getMilestoneName()).to.be.a('String');
    });
  });
});
