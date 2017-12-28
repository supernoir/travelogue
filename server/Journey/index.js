class Journey {
  constructor(name, desc, dateRange, milestones) {
    this.journeyName = name;
    this.journeyDesc = desc;
    this.journeyDateRange = dateRange;
    this.journeyMilestones = milestones;
  }
  getJourneyName() {
    return this.journeyName;
  }
  getJourneyDesc() {
    return this.journeyDesc;
  }
  getJourneyDateRange() {
    return this.journeyDateRange;
  }
  getJourneyMilestones() {
    return this.journeyMilestones;
  }

  addMilestoneToJourney(newMilestone) {
    let currentSet = this.journeyMilestones;
    currentSet.push(newMilestone);
    this.journeyMilestones = currentSet;
  }
}

module.exports = Journey;
