"use strict";
var Milestone = /** @class */ (function () {
    function Milestone(name, journey, date, desc, cast, loc) {
        this.milestoneName = name;
        this.milestoneJourney = journey;
        this.milestoneDate = date;
        this.milestoneDesc = desc;
        this.milestoneCast = cast;
        this.milestoneLoc = loc;
    }
    Milestone.prototype.getMilestoneName = function () {
        return this.milestoneName;
    };
    Milestone.prototype.getMilestoneJourney = function () {
        return this.milestoneJourney;
    };
    Milestone.prototype.getMilestoneDate = function () {
        return this.milestoneDate;
    };
    Milestone.prototype.getMilestoneDesc = function () {
        return this.milestoneDesc;
    };
    Milestone.prototype.getMilestoneCast = function () {
        return this.milestoneCast;
    };
    Milestone.prototype.getMilestoneLoc = function () {
        return this.milestoneLoc;
    };
    return Milestone;
}());
module.exports = Milestone;
