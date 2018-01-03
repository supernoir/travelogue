class Milestone {
  milestoneName: string
  milestoneJourney: string
  milestoneDate: string
  milestoneDesc: string
  milestoneCast: Array<string>
  milestoneLoc: Array<string>

  constructor(name: string, journey: string, date: string, desc: string, cast: Array<string>, loc: Array<string>) {
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
  getMilestoneLoc() {
    return this.milestoneLoc;
  }
}

export = Milestone;
