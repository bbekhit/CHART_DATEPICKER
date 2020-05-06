import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Row from "./Globals/Row";
import Col from "./Globals/Col";
import { Section } from "./Globals/Section";
import FormInput from "./Globals/Form/FormInput";
import Form from "./Globals/Form/Form";
import { GroupContainer } from "./Globals/Form/FormInputContainer";
import CustomCalenderComponent from "./CustomCalenderComponent";
import moment from "moment";
import { PrimaryBtn } from "./Globals/Button";

const momentDateFormat = "MM/DD/YYYY";

const DatePickerComponent = () => {
  const [values, setValues] = useState({
    name: "",
    type: "",
    customDate: moment().format(momentDateFormat),
    date: moment().toDate(),
  });

  console.log("moment", moment().toDate());

  const { name, type, date, customDate } = values;

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleDPChange = (val) => {
    setValues({
      ...values,
      date: val,
      customDate: moment(val).format(momentDateFormat),
    });
  };

  const handleCustomChange = (val) => {
    let d = moment(val, momentDateFormat);
    if (d.isValid()) {
      setValues({ ...values, date: d.toDate() });
    }
    setValues({ ...values, customDate: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, type, customDate);
    console.log(moment(date).from(moment.now()));
    // var now = moment(new Date()); //todays date
    // var end = moment(date); // another date
    // var duration = moment.duration(now.diff(end));
    // var days = duration.asDays();
    // console.log("days", days);
  };

  return (
    <>
      <Section>
        <Row>
          <Col>
            <Form handleSubmit={handleSubmit}>
              <GroupContainer>
                <FormInput
                  type="text"
                  label="Name"
                  onChange={onChange}
                  value={name}
                  name="name"
                />
              </GroupContainer>
              <GroupContainer>
                <FormInput
                  type="text"
                  label="Type"
                  onChange={onChange}
                  value={type}
                  name="type"
                />
              </GroupContainer>
              <GroupContainer>
                <DatePicker
                  selected={date}
                  onChange={(value) => handleDPChange(value)}
                  // minDate={new Date()}
                  filterDate={(date) =>
                    date.getDay() !== 0 && date.getDay() !== 6
                  }
                  // isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  dateFormat="yyyy/MM/dd"
                  customInput={
                    <CustomCalenderComponent
                      customDate={customDate}
                      handleCustomChange={handleCustomChange}
                    />
                  }
                />
              </GroupContainer>
              <PrimaryBtn type="submit">Submit</PrimaryBtn>
            </Form>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default DatePickerComponent;
// https://reactdatepicker.com/
