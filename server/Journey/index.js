class Journey {
  constructor(name, desc, dateRange, milestones) {
    this.journeyName = name;
    this.journeyDesc = desc;
    this.dateRange = dateRange;
    this.milestones = milestones;
  }
  getJourneyName() {
    return this.journeyName;
  }
}

module.exports = Journey;
