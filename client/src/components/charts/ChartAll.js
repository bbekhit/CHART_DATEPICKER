import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import Row from "../Globals/Row";
import { Section } from "../Globals/Section";
import Col from "../Globals/Col";

const ChartAll = ({ className }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt", //"round","square"
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 7,
        pointHoverRadius: 9,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "red",
            fontFamily: "Lato",
            fontSize: 12,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: "red",
            fontFamily: "Lato",
            fontSize: 12,
          },
        },
      ],
    },
  };

  return (
    <div className={className}>
      <Row className="custom">
        <Col>
          <Section>
            <Line data={data} options={options} />
          </Section>
        </Col>
      </Row>
    </div>
  );
};

export default styled(ChartAll)`
  .custom {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid black;
  }
`;
