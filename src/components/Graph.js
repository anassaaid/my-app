import React, { Component } from "react";
import Highcharts from "highcharts";

export default class Graph extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      modalShow: false,
      series: [
        {
          name: "Gases",
          data: [
            {
              name: "Editique",
              y: 30,
              color: "#3498db"
            },
            {
              name: "Digiposte",
              y: 70,
              color: "#9b59b6"
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    this.highChartsRender();
  }

  highChartsRender() {
    Highcharts.chart({
      chart: {
        type: "column",
        renderTo: "ventilation",
        marginTop: "50",
        marginBottom: "70"
      },
      title: {
        verticalAlign: "top",
        floating: true,
        text: ""
      },
      plotOptions: {
        pie: {
          dataLabels: {
            format: "{point.name}: {point.percentage:.1f} %"
          },
          innerSize: "50%"
        }
      },
        series: this.props.series
    });
  }

  render() {
    return <div id="ventilation" style={{height:"200px"}} />;
  }
}
