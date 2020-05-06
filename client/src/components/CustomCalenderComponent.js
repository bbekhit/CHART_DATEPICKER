import React, { Component } from "react";
import FormInput from "./Globals/Form/FormInput";
import { FaCalendar } from "react-icons/fa";

export default class CustomCalenderComponent extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <FaCalendar
          style={{
            position: "absolute",
            top: "6px",
            right: "15px",
            fontSize: "25px",
            zIndex: "10",
            cursor: "pointer",
          }}
          onClick={this.props.onClick}
        />
        <FormInput
          onClick={this.props.onClick}
          value={this.props.customDate}
          onChange={(e) => this.props.handleCustomChange(e.target.value)}
          type="input"
          size={"400px"}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}
// https://reactdatepicker.com/
