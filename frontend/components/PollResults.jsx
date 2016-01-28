import React from "react";

export default class PollResults extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    let data = google.visualization.arrayToDataTable([
      ["Option", "%"],
      [
        this.props.poll.event.home_team,
        this.props.poll.home_team
      ],
      [
        "Draw",
        this.props.poll.draw
      ],
      [
        this.props.poll.event.away_team,
        this.props.poll.away_team
      ]
    ]);

    let options = {
      width: "100%",
      height: "100%",
      chartArea: {
        left: "0%",
        top: "10%",
        height: "100%",
        width: "100%"
      },
      is3D: true,
      fontSize: 14,
      slices: [{color: "#f44336"}, {color: "#8bc34a"}, {color: "#607d8b"}]
    };

    let chart = new google.visualization.PieChart(
      document.getElementById(`chart-${this.props.poll.id}`)
    );

    chart.draw(data, options);
  }

  render() {
    return (
      <div className="poll-results">
        <span className="card-title grey-text text-darken-1">
          Poll Results
          <i className="right fa fa-times"></i>
        </span>

        <div id={`chart-${this.props.poll.id}`} className="poll-chart"></div>
      </div>
    );
  }
}
