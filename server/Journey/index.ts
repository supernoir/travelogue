class Journey {
  journeyName: String
  journeyDesc: String
  journeyDateRange: Array<String>
  journeyMilestones: Array<Object>

  constructor(name: String, desc: String, dateRange: Array<String>, milestones: Array<Object>) {
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

  addMilestoneToJourney(newMilestone: Object) {
    let currentSet = this.journeyMilestones;
    currentSet.push(newMilestone);
    this.journeyMilestones = currentSet;
  }

  addStartDate(startDate: string) {
    if (!this.journeyDateRange[0]) {
      return this.journeyDateRange[0] = startDate;
    }
  }

  addEndDate(endDate: string) {
    let endKey = this.getJourneyDateRange().length;
    let parsedEndKey = endKey as number
    if (!this.journeyDateRange[endKey]) {
      return this.journeyDateRange[endKey] = endDate;
    }
  }
}

export = Journey;
