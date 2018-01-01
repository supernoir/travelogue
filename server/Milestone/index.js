class Milestone {
  constructor(name, journey, date, desc, cast, loc) {
    this.milestoneName = name;
    this.milestoneJourney = journey;
    this.milestoneDate = date;
    this.milestoneDesc = desc;
    this.milestoneCast = cast;
    this.milestoneLoc = loc;
  }

  getMilestoneName() {
    return this.milestoneName;
  }
  getMilestoneJourney() {
    return this.milestoneJourney;
  }
  getMilestoneDate() {
    return this.milestoneDate;
  }
  getMilestoneDesc() {
    return this.milestoneDesc;
  }
  getMilestoneCast() {
    return this.milestoneCast;
  }
  getMilestoneCast() {
    return this.milestoneLoc;
  }
}

module.exports = Milestone;
