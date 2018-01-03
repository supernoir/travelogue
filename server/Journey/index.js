"use strict";
var Journey = /** @class */ (function () {
    function Journey(name, desc, dateRange, milestones) {
        this.journeyName = name;
        this.journeyDesc = desc;
        this.journeyDateRange = dateRange;
        this.journeyMilestones = milestones;
    }
    Journey.prototype.getJourneyName = function () {
        return this.journeyName;
    };
    Journey.prototype.getJourneyDesc = function () {
        return this.journeyDesc;
    };
    Journey.prototype.getJourneyDateRange = function () {
        return this.journeyDateRange;
    };
    Journey.prototype.getJourneyMilestones = function () {
        return this.journeyMilestones;
    };
    Journey.prototype.addMilestoneToJourney = function (newMilestone) {
        var currentSet = this.journeyMilestones;
        currentSet.push(newMilestone);
        this.journeyMilestones = currentSet;
    };
    Journey.prototype.addStartDate = function (startDate) {
        if (!this.journeyDateRange[0]) {
            return this.journeyDateRange[0] = startDate;
        }
    };
    Journey.prototype.addEndDate = function (endDate) {
        var endKey = this.getJourneyDateRange().length;
        var parsedEndKey = endKey;
        console.log(typeof parsedEndKey);
        //parseInt(endKey);
        if (!this.journeyDateRange[endKey]) {
            return this.journeyDateRange[endKey] = endDate;
        }
    };
    return Journey;
}());
module.exports = Journey;
