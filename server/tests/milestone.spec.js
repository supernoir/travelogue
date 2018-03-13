const expect = require('chai').expect;
const Milestone = require('../Milestone/index');

let sampleMilestone = new Milestone(
	'Vancouver',
	'Alaska',
	'February 21, 2012',
	'An afternoon in a beautiful city by the sea',
	['John', 'Paul', 'George', 'Ringo'],
	['49°15′N', '123°6′W']
);

describe('Milestone Class', () => {
	describe('MilestoneName', () => {
		it('should be of type string', () => {
			expect(sampleMilestone.getMilestoneName()).to.be.a('String');
		});
	});
	describe('MilestoneJourney', () => {
		it('should be of type string', () => {
			expect(sampleMilestone.getMilestoneJourney()).to.be.a('String');
		});
	});
	describe('MilestoneDate', () => {
		it('should be of type string', () => {
			expect(sampleMilestone.getMilestoneDate()).to.be.a('String');
		});
	});
	describe('MilestoneDesc', () => {
		it('should be of type string', () => {
			expect(sampleMilestone.getMilestoneDesc()).to.be.a('String');
		});
	});
	describe('MilestoneCast', () => {
		it('should be of type array', () => {
			expect(sampleMilestone.getMilestoneCast()).to.be.a('Array');
		});
		it('should have items of type string', () => {
			let castArray = sampleMilestone.getMilestoneCast();
			castArray.map(cast => {
				expect(cast).to.be.a('String');
			});
		});
	});
	describe('MilestoneLoc', () => {
		it('should be of type array', () => {
			expect(sampleMilestone.getMilestoneLoc()).to.be.a('Array');
		});
		it('should have items of type string', () => {
			let locArray = sampleMilestone.getMilestoneLoc();
			locArray.map(loc => {
				expect(loc).to.be.a('String');
			});
		});
		it('should have a max length of 2', () => {
			expect(sampleMilestone.getMilestoneLoc()).to.have.length(2);
		});
	});
});
