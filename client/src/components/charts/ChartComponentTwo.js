import React from "react";
import { connect } from "react-redux";
import Row from "../Globals/Row";
import { Section } from "../Globals/Section";
import Col from "../Globals/Col";
import { Line, Bar, Pie } from "react-chartjs-2";
import { PrimaryBtn } from "../Globals/Button";
import { getData } from "../../redux/actions/bitcoinActions";
import FormInput from "../Globals/Form/FormInput";
import { FormContainer } from "../Globals/Form/FormInputContainer";

const ChartComponentTwo = ({ getData, bitcoin }) => {
  const [num, setNum] = React.useState(15);

  const fetchData = (time) => {
    getData({
      time: time,
      number: num,
    });
  };

  const { data, loading } = bitcoin;

  return (
    <div>
      <Row>
        <Col size={"25%"}>
          <Section>
            <PrimaryBtn onClick={() => fetchData("1min")}>1 Min</PrimaryBtn>
            <PrimaryBtn onClick={() => fetchData("5min")}>5 Min</PrimaryBtn>
            <PrimaryBtn onClick={() => fetchData("15min")}>15 Min</PrimaryBtn>
            <FormContainer>
              <FormInput onChange={(e) => setNum(e.target.value)} />
            </FormContainer>

            {loading && <p>Loading...</p>}

            <Pie
              data={data}
              options={{
                responsive: true,
                title: {
                  display: true,
                  text: "Bitcoin price",
                  fontSize: 25,
                },
                legend: {
                  display: true,
                  position: "right",
                  labels: {
                    fontColor: "#000",
                  },
                },
                layout: {
                  padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0,
                  },
                },
                tooltips: {
                  enabled: true,
                },
              }}
            />
          </Section>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToPrpos = (state) => ({
  bitcoin: state.bitcoin,
});

export default connect(mapStateToPrpos, { getData })(ChartComponentTwo);
// https://www.youtube.com/watch?v=UsL46JwBZwk&list=PLiC3CRHwhf73vrHuB4vyU8TgXxffQy_fa&index=4
// https://www.youtube.com/watch?v=eAsII_yr6tc
