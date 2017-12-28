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

  addStartDate(startDate) {
    if (!this.journeyDateRange[0]) {
      return this.journeyDateRange[0].push(startDate);
    }
  }

  addEndDate(endDate) {
    let endKey = this.getJourneyDateRange().length();
    parseInt(endKey);
    console.log(endKey);
    if (!this.journeyDateRange[endKey]) {
      return this.journeyDateRange[endKey].push(endDate);
    }
  }
}

module.exports = Journey;
