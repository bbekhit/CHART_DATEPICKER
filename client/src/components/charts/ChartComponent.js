import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import Row from "../Globals/Row";
import Col from "../Globals/Col";
import { Section } from "../Globals/Section";

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    let empName = [];
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
          empName.push(dataObj.employee_name);
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "Employee salary",
              data: empSal,
              // backgroundColor: "rgba(75, 192, 192, 0.6)",
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 156, 64, 0.6)",
                "rgba(255, 89, 132, 0.6)",
                "rgba(255, 66, 132, 0.6)",
                "rgba(255, 77, 132, 0.6)",
                "rgba(255, 88, 132, 0.6)",
              ],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <Section>
        <Row>
          <Col size={"50%"}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                title: { text: "THICCNESS SCALE", display: true },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                      },
                      gridLines: {
                        display: true,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: true,
                      },
                    },
                  ],
                },
              }}
            />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ChartComponent;
