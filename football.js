Template.Football.helpers({
    range: function() {
        var rangeLow = 10;
        var rangeHigh = 30;
        var range = rangeHigh - rangeLow;
        return {
            low: rangeLow,
            interim: (rangeLow + (range / 2)),
            high: rangeHigh
        }
    }
});

Template.Football.onRendered (function () {
    const self = this;

    var valuationStartPct = 25;
    var valuationWidthPct = 50;

    var barContainer = d3.select("#bar1")
        .append("svg")
        .attr("id", "svg-bar");

    var bar = barContainer.append("rect")
        .attr("x", valuationStartPct + "%")
        .attr("y", 0)
        .attr("height", 35)
        .attr("width", valuationWidthPct + "%")
        .attr("id", "bar1");

    self.autorun(function() {
        var valuationStartPct = 25;
        var valuationWidthPct = 50;

        barContainer.select("#bar1")
            .transition()
            .duration(0)
            .attr("x", valuationStartPct + "%")
            .attr("y", 0)
            .attr("height", 35)
            .attr("width", valuationWidthPct + "%");

    });
});
